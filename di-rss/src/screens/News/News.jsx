import React from "react";

import { useNews } from "./hooks/useNews";

const News = () => {
  const { news, loading } = useNews();
  console.log("NEWS", news, loading);
  return <div>these are news</div>;
};

export default News;
