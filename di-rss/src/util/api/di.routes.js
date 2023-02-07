import axios from "axios";

export const getNewsFromRSS = async () => {
  const { data } = await axios.get("https://www.di.se/rss");
  return data;
};
export const getExpressenNews = async () => {
  const { data } = await axios.get("https://feeds.expressen.se/nyheter/");
  return data;
};
export const getGTNews = async () => {
  const { data } = await axios.get("https://feeds.expressen.se/gt");
  return data;
};
