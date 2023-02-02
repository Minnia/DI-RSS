import styled from "styled-components";

export const ArticleContainer = styled.div`
  height: 250px;
  width: 60%;
  box-shadow: 2px 5px #ffffff;
  border-radius: 5%;
  box-sizing: border-box;
  padding: 8px;
  margin: 8px;
  background-color: #ffffff;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ArticleText = styled.span`
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "regular"};
  color: ${({ color }) => (color ? color : "#000")};
`;

export const ArticleImage = styled.img`
  height: 200px;
  width: 60%;
  position: relative;

  padding-bottom: 8px;
`;
