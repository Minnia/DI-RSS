import React from "react";
import * as S from "./styled";

const Article = ({ article }) => {
  console.log(article);
  return (
    <S.ArticleContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <S.ArticleTitle>{article.title}</S.ArticleTitle>
      </div>
      <div>
        <S.ArticleTitle>{article.pubDate}</S.ArticleTitle>
      </div>
    </S.ArticleContainer>
  );
};

export default Article;
