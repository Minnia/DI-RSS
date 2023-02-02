import styled from "styled-components";
import { colors, variables } from "../../../../theme";

const { baseline, fontWeightBold, fontWeightRegular } = variables;

export const ArticleContainer = styled.div`
  // chose to not make box-shadow a variable, as it's not commonly used everywhere
  box-shadow: 0 1px 2px 0 rgb(26 26 26 / 15%);
  border-top: ${variables.baseline * 0.5}px solid ${colors.diRed};
  box-sizing: border-box;
  padding: ${baseline}px;
  margin: ${baseline}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ImageContainer = styled.div`
  display: block;
  position: relative;
  padding-top: 56.25%;
  width: 100%;
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

export const ArticleTitle = styled(ArticleText)`
  min-height: 40px;
`;

export const ArticleTextOuterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ArticleTextInnerContainer = styled(ArticleTextOuterContainer)`
  flex: 1;
  justify-content: flex-start;
`;

export const ArticleImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
