import styled from "styled-components";

export const TitleStyled = styled.h1`
  grid-area: title;
  white-space: pre-wrap;
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 80px;
  letter-spacing: 0.2px;
  color: #252b42;

  @media (max-width: 720px) {
    font-size: 28px;
    line-height: 39px;
    color: #252b42;
  }
`;
