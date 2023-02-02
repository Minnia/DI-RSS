import styled from "styled-components";
import { colors, variables } from "../../../../theme";

const { baseline, fontWeightBold, fontWeightRegular, newsSnippetHeight } =
  variables;

export const ArticleContainer = styled.div`
  height: ${newsSnippetHeight}px;
  width: 70%;
  // chose to not make box-shadow a variable, as it's not commonly used everywhere
  box-shadow: 0 1px 2px 0 rgb(26 26 26 / 15%);
  border-top: ${variables.baseline * 0.5}px solid ${colors.diRed};
  box-sizing: border-box;
  padding: ${baseline}px;
  margin: ${baseline}px;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ArticleText = styled.span`
  font-weight: ${({ fontWeight }) =>
    fontWeight === fontWeightBold ? fontWeightBold : fontWeightRegular};
  color: ${({ color }) => (color ? color : colors.diBlack)};
  position: relative;
  display: "flex";
  justify-content: center;
  margin-bottom: ${baseline * 0.5}px;
  padding-right: ${baseline * 0.5}px;
`;
export const ArticleTextOuterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const ArticleTextInnerContainer = styled(ArticleTextOuterContainer)`
  flex: 1;
  justify-content: flex-start;
`;

export const ArticleImage = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: ${variables.baseline}px;
`;
