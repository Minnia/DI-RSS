import { useEffect, useState } from "react";
import XMLParser from "react-xml-parser";
import { getNewsFromRSS } from "../../../util/api/di.routes";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  /** The getNews() function fetches the data and converts the XML we get.
   * It then maps over all the converted data and returns child.children.
   * Then, we once again iterate and flatten the array, to then filter through the children
   * and return filtered results with data.
   * We map through and flatten the array, and then sort our flattened results in an ascending order.
   */
  const getNews = async () => {
    setLoading(true);

    const data = await getNewsFromRSS();

    const convertXml = new XMLParser().parseFromString(data);
    const getAll = convertXml.children.map((child) => child.children);

    const getAllNews = getAll.map((child) =>
      child.flat().filter((c) => c.children.length > 0)
    );

    const flattenNewsArr = getAllNews.map((articles) =>
      articles.flat().map((article) => article.children)
    );
    const [flattened] = flattenNewsArr.map((t) => t);
    const sortNewsAsc = flattened.sort((a, b) => {
      const aIndex = a.findIndex((item) => item.name === "pubDate");
      const bIndex = b.findIndex((item) => item.name === "pubDate");
      const aPubDate = a[aIndex].value;
      const bPubDate = b[bIndex].value;

      return new Date(bPubDate).getTime() - new Date(aPubDate).getTime();
    });

    /** formattedDate maps through the array of news twice. Once, to map through
     * each item and once to map through the element of the item. After, we're checking
     * if there are children within an element. If so, we map through these and check if there
     * is a thumbnail, and if there is we return an array with the key and value (which here is the url).
     * Otherwise, we'll return the key and value of the child.
     * In the end, we return the article keys and values as an object,
     * We set the data to news and set loading to false
     */
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
