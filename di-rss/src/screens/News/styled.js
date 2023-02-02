import styled from "styled-components";

const getGridSize = (size) => {
  switch (true) {
    case size.dynamicWidth <= 320:
      return "auto";
    case size.dynamicWidth > 320 && size.dynamicWidth < 768:
      return "1fr 1fr";
    case size.dynamicWidth >= 768:
      return "1fr 1fr 1fr";
    default:
      return "1fr 1fr 1fr";
  }
};

export const NewsContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${({ size }) => getGridSize(size)};
  height: 100%;
  padding: 12px;
`;
