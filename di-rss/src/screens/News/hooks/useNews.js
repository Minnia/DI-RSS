import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import { getNewsFromRSS } from "../../../util/api/di.routes";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

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

    return Object.fromEntries(articleKeyValues);
  };

  const getNews = async () => {
    setLoading(true);

    const data = await getNewsFromRSS();

    const parseData = parseXMLToJSON(data);

    const sortNewsAsc = parseData.sort((a, b) => {
      const aIndex = a.findIndex((item) => item.name === "pubDate");
      const bIndex = b.findIndex((item) => item.name === "pubDate");
      const aPubDate = a[aIndex].value;
      const bPubDate = b[bIndex].value;

      return new Date(bPubDate).getTime() - new Date(aPubDate).getTime();
    });

    const formattedData = sortNewsAsc.map((item) => formatJSONToNews(item));

    setNews(formattedData);
    return setLoading(false);
  };
  return {
    news,
    loading,
  };
};
