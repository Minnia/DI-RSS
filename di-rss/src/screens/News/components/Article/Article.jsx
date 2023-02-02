import React from "react";
import { colors, variables } from "../../../../theme";
import * as S from "./styled";

const Article = ({ article }) => {
  const thumbNail =
    article?.content && article?.content["media:thumbnail"].split("?")[0];

  const publishingDate = new Date(article.pubDate).toLocaleString();

  const { fontWeightBold, fontWeightRegular } = variables;
  const { diRed } = colors;

  return (
    <S.ArticleContainer onClick={() => window.open(article.link)}>
      <S.ArticleTitle fontWeight={fontWeightBold} color={diRed}>
        {article.title}
      </S.ArticleTitle>

      <S.ImageContainer>
        {article?.content ? (
          <S.ArticleImage alt="" src={thumbNail} />
        ) : (
          <S.ArticleImage alt="" src={"https://via.placeholder.com/150"} />
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
        <S.ArticleText fontWeight="bold">{publishingDate}</S.ArticleText>
      </S.ArticleTextOuterContainer>
    </S.ArticleContainer>
  );
};

export default Article;
