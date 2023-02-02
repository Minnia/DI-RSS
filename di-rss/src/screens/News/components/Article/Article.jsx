import React from "react";
import * as S from "./styled";

const Article = ({ article }) => {
  const thumbNail =
    article?.content && article?.content["media:thumbnail"].split("?")[0];

  console.log(new Date(article.pubDate).toLocaleString());

  const publishingDate = new Date(article.pubDate).toLocaleString();

  return (
    <S.ArticleContainer>
      <S.ArticleText
        fontWeight="bold"
        color="#A70F0C"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {article.title}
      </S.ArticleText>

      <S.ImageContainer>
        {article?.content && <S.ArticleImage alt="" src={thumbNail} />}
      </S.ImageContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <S.ArticleText fontWeight="bold">{publishingDate}</S.ArticleText>
        <S.ArticleText fontWeight="regular">
          {article["dc:creator"]}
        </S.ArticleText>
      </div>
    </S.ArticleContainer>
  );
};

export default Article;
