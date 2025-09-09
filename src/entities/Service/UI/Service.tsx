import type { JSX } from "react";
import styled from "styled-components";

export const Service = ({ Icon, title }: { Icon: () => JSX.Element; title: string }) => {
  return (
    <ContainerStyled>
      <Icon />
      <TitleStyled>{title}</TitleStyled>
      <SeparatorStyled />
      <DescriptionStyled>Рыба текст</DescriptionStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  min-width: 328px;
  height: 248px;
  background: #ffffff;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  padding: 35px 40px;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 20px;
`;

const TitleStyled = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #252b42;
`;

const DescriptionStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #737373;
`;

const SeparatorStyled = styled.div`
  height: 2px;
  width: 50px;
  border-bottom: 1px solid #e74040;
`;
