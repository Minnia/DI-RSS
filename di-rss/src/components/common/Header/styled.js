import styled from "styled-components";
import { colors, variables } from "../../../theme";

const { baseline } = variables;

export const StyledHeader = styled.h1`
  color: ${colors.diRed};
  margin-left: ${baseline * 3}px;
  border-bottom: ${baseline * 0.5}px solid ${colors.diRed};
`;
