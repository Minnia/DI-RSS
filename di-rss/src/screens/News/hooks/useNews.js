import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import {
  getExpressenNews,
  getGTNews,
  getNewsFromRSS,
} from "../../../util/api/di.routes";

const parseXMLToJSON = (data) => {
  const convertXml = new XMLParser().parseFromString(data);
  const getAll = convertXml.children.map((child) => child.children);

  const getAllNews = getAll.map((child) =>
    child.flat().filter((c) => c.children.length > 0)
  );

  const [flattenNewsArr] = getAllNews.map((articles) =>
    articles.flat().map((article) => article.children)
  );
  return flattenNewsArr;
};

const formatJSONToNews = (item) => {
  const articleKeyValues = item.map((element) => {
    if (element.children && element.children.length > 0) {
      const childrenKeyValues = element.children.map((child) => {
        if (child.name.includes("thumbnail")) {
          return [child.name, child.attributes.url];
        }
        return [child.name, child.value];
      });
      const keyValues = ["content", Object.fromEntries(childrenKeyValues)];

      return keyValues;
    }
    return [element.name, element.value];
  });

  const object = Object.fromEntries(articleKeyValues);

  return {
    ...object,
    source: getSourceFromGuid(object.guid),
  };
};

const parseFromSource = (newsObject) => {
  if (newsObject.source === "di") {
    return {
      ...newsObject,
      author: newsObject["dc:creator"],
      thumbnail:
        newsObject?.content && newsObject?.content["media:thumbnail"]
          ? newsObject?.content["media:thumbnail"]?.split("?")[0]
          : "https://via.placeholder.com/150",
    };
  }
  const matches = extractSrcFromStr(newsObject.description);
  return {
    ...newsObject,
    thumbnail:
      matches && matches.length > 0
        ? matches[1]
        : "https://via.placeholder.com/150",
  };
};

const extractSrcFromStr = (str) => {
  const regex = /<img[^>]+src='(https:\/\/[^'>]+)'/g;
  return regex.exec(str);
};

const getSourceFromGuid = (guid) => {
  if (guid.includes("expressen")) return "expressen";
  return "di";
};

const sortNews = (arr) => {
  const filterOutUndefinedValues = arr.filter((a) =>
    a.some((a) => a.name === "pubDate")
  );
  return filterOutUndefinedValues.sort((a, b) => {
    const aIndex = a.findIndex((item) => item.name === "pubDate");

    const bIndex = b.findIndex((item) => item.name === "pubDate");

    const aPubDate = a[aIndex].value;
    const bPubDate = b[bIndex].value;

    return new Date(bPubDate).getTime() - new Date(aPubDate).getTime();
  });
};

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    setLoading(true);

    const data = await getNewsFromRSS();
    const data1 = await getExpressenNews();
    const data2 = await getGTNews();

    const parseData = parseXMLToJSON(data);
    const parseData1 = parseXMLToJSON(data1);
    const parseData2 = parseXMLToJSON(data2);

    const test1 = parseData.concat(parseData1, parseData2);

    const sortedNews = sortNews(test1);

    const formattedData = sortedNews.map((item) => formatJSONToNews(item));
    const parsedNews = formattedData.map(parseFromSource);

    setNews(parsedNews);
    return setLoading(false);
  };
  return {
    news,
    loading,
  };
};
