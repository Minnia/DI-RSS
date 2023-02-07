import React from "react";
import { colors, variables } from "../../../../theme";
import * as S from "./styled";

const Article = ({ article }) => {
  const publishingDate = new Date(article.pubDate).toLocaleString();

  const { fontWeightBold, fontWeightRegular } = variables;
  const { diRed } = colors;

  const titleLength = article.title.length;

  const openArticle = window.open(article.link);

  return (
    <S.ArticleContainer onClick={openArticle}>
      <S.ArticleTitle fontWeight={fontWeightBold} color={diRed}>
        {article.title}
      </S.ArticleTitle>

      <S.ImageContainer>
        <S.ArticleImage
          titleLength={titleLength}
          alt=""
          src={article.thumbnail}
        />
      </S.ImageContainer>
      <S.ArticleTextOuterContainer>
        <S.ArticleTextInnerContainer>
          <S.ArticleText color={diRed} fontWeight={fontWeightBold}>
            Kommentar
          </S.ArticleText>
          <S.ArticleText fontWeight={fontWeightRegular}>
            {article.author}
          </S.ArticleText>
        </S.ArticleTextInnerContainer>
        <S.ArticleText fontWeight={fontWeightBold}>
          {publishingDate}
        </S.ArticleText>
      </S.ArticleTextOuterContainer>
    </S.ArticleContainer>
  );
};

export default Article;
