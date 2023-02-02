import styled from "styled-components";

export const ArticleContainer = styled.div`
  height: 270px;
  width: 60%;
  box-shadow: 0 1px 2px 0 rgb(26 26 26 / 15%);
  border-top: 3px solid #a7100c;
  box-sizing: border-box;
  padding: 8px;
  margin: 8px;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ArticleText = styled.span`
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "regular"};
  color: ${({ color }) => (color ? color : "#1a1a1a")};
`;

export const ArticleImage = styled.img`
  height: 200px;
  width: 60%;
  position: relative;

  padding-bottom: 8px;
`;
