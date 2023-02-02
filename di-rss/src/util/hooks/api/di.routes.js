import axios from "axios";

const diRoutes = () => ({
  getNewsTest: async () => {
    const { data } = await axios.get("https://www.di.se/rss");
    return data;
  },
});

export default diRoutes;
