import axios from "axios";
import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    setLoading(true);
    const { data } = await axios.get("https://www.di.se/rss");

    const convertXml = new XMLParser().parseFromString(data);
    const getAll = convertXml.children.map((child) => child.children);

    const getAllNews = getAll.map((child, i) =>
      child.flat().filter((c) => c.children.length > 0)
    );

    const flattenNewsArr = getAllNews.map((t) =>
      t.flat().map((tes) => tes.children)
    );
    const [flattened] = flattenNewsArr.map((t) => t);
    const sortNewsAsc = flattened.sort((a, b) => {
      const aIndex = a.findIndex((item) => item.name === "pubDate");
      const bIndex = b.findIndex((item) => item.name === "pubDate");
      const aPubDate = a[aIndex].value;
      const bPubDate = b[bIndex].value;

      return new Date(bPubDate).getTime() - new Date(aPubDate).getTime();
    });

    const formattedData = sortNewsAsc.map((item) => {
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
    });

    setNews(formattedData);
    return setLoading(false);
  };
  return {
    news,
    loading,
  };
};
