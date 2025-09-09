import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ outline?: boolean; largeContent?: boolean }>`
  background: #ff685b;
  border: none;
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
  border: none;

  ${({ outline }) =>
    outline &&
    css`
      background: transparent;
      color: #ff685b;
      border: 1px solid #ff685b;
    `}

  ${({ largeContent }) =>
    largeContent &&
    css`
      border-width: 2px;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    `}
`;
