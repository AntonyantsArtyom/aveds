import styled from "styled-components";
import { TitleStyled } from "../shared/TitleStyled";

export const Contacts = () => {
  return (
    <ContainerStyled>
      <TitleStyled>Контакты</TitleStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  max-width: 1450px;
  padding: 0 195px;
  min-height: calc(100dvh - 80px);

  padding-bottom: 85px;
  display: grid;
  align-content: center;
  justify-content: start;

  @media (max-width: 720px) {
    padding: 95px 10px;
    align-content: start;
  }
`;
