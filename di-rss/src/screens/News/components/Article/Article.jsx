import React from "react";
import { colors, variables } from "../../../../theme";
import * as S from "./styled";

const Article = ({ article }) => {
  const thumbNail =
    article?.content && article?.content["media:thumbnail"].split("?")[0];

  const placeholderImage = "https://via.placeholder.com/150";
  const publishingDate = new Date(article.pubDate).toLocaleString();

  const { fontWeightBold, fontWeightRegular } = variables;
  const { diRed } = colors;

  const titleLength = article.title.length;

  return (
    <S.ArticleContainer onClick={() => window.open(article.link)}>
      <S.ArticleTitle fontWeight={fontWeightBold} color={diRed}>
        {article.title}
      </S.ArticleTitle>

      <S.ImageContainer>
        {article?.content ? (
          <S.ArticleImage titleLength={titleLength} alt="" src={thumbNail} />
        ) : (
          <S.ArticleImage alt="" src={placeholderImage} />
        )}
      </S.ImageContainer>
      <S.ArticleTextOuterContainer>
        <S.ArticleTextInnerContainer>
          <S.ArticleText color={diRed} fontWeight={fontWeightBold}>
            Kommentar
          </S.ArticleText>
          <S.ArticleText fontWeight={fontWeightRegular}>
            {article["dc:creator"]}
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
