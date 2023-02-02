import React from "react";
import Article from "./components/Article";
import * as S from "./styled";

import { useNews } from "./hooks/useNews";
import { useScreenSize } from "../../util/useScreenSize";

const News = () => {
  const { screenSize } = useScreenSize();
  const { news } = useNews();

  return (
    <S.NewsContainer size={screenSize}>
      {news.map((article) => (
        <Article article={article} />
      ))}
      <div>
        <img src={"Generic"} alt="" />
      </div>
    </S.NewsContainer>
  );
};

export default News;
