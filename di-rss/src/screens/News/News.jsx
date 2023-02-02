import React from "react";
import Article from "./components/Article";
import * as S from "./styled";

import { useNews } from "./hooks/useNews";
import { useScreenSize } from "../../util/hooks/useScreenSize";
import Header from "../../components/common/Header";

const News = () => {
  const { screenSize } = useScreenSize();
  const { news } = useNews();

  return (
    <>
      <Header />
      <S.NewsContainer size={screenSize}>
        {news.map((article) => <Article article={article} />).slice(0, 11)}
      </S.NewsContainer>
    </>
  );
};

export default News;
