import React from "react";
import Article from "./components/Article";
import * as S from "./styled";

import { useNews } from "./hooks/useNews";

const News = () => {
  const { news } = useNews();

  return (
    <S.NewsContainer>
      {news.map((article) => (
        <Article article={article} />
      ))}
    </S.NewsContainer>
  );
};

export default News;
