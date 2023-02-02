import styled from "styled-components";

const getGridSize = (size) => {
  // console.log("size", size.dynamicWidth);
  // console.log(size.dynamicWidth <= 320);
  // console.log(size.dynamicWidth >= 320 && size.dynamicWidth <= 425);
  // console.log(size.dynamicWidth >= 768);

  switch (true) {
    case size.dynamicWidth <= 320:
      return "auto";
    case size.dynamicWidth > 320 && size.dynamicWidth < 768:
      return "auto auto";
    case size.dynamicWidth >= 768:
      return "auto auto auto auto";
    default:
      return "1fr 1fr 1fr 1fr";
  }
};

export const NewsContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${({ size }) => getGridSize(size)};
  height: 100%;
  padding: 16px;
`;
