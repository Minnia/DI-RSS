import axios from "axios";

export const getNewsFromRSS = async () => {
  const { data } = await axios.get("https://www.di.se/rss");
  return data;
};
