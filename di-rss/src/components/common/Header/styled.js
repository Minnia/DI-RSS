import styled from "styled-components";
import { colors, variables } from "../../../theme";

const { baseline } = variables;

export const StyledHeader = styled.h1`
  color: ${colors.diRed};
  margin: ${baseline}px ${baseline * 3}px 0px ${baseline * 3}px;
`;
