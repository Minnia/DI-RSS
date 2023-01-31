import styled from "styled-components";

export const ArticleContainer = styled.div`
  height: 200px;
  width: 250px;
  border: 1px solid black;
  border-radius: 5%;
  padding: 8px;
  margin: 8px;
`;

export const ArticleTitle = styled.span`
  font-weight: bold;
  color: black;
`;

export const ArticleAuthor = styled.h4`
  color: black;
`;

export const ArticlePublishingDate = styled(ArticleAuthor)``;
