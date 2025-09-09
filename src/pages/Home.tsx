import styled from "styled-components";
import { ButtonStyled } from "../shared/ButtonStyled";
import { Service } from "../entities/Service/UI/Service";
import { getServices } from "../entities/Service/hooks/getServices";

export const Home = () => {
  const [services] = getServices();

  return (
    <ContainerStyled>
      <TitleStyled>{"Место для получения\nмедицинской помощи"}</TitleStyled>
      <ButtonsContainerStyled>
        <HomePageButtonStyled>Войти</HomePageButtonStyled>
        <HomePageButtonStyled outline largeContent>
          Контакты
        </HomePageButtonStyled>
      </ButtonsContainerStyled>
      <ServicesContainer>
        {services.map((service) => (
          <Service key={service.title} Icon={service.Icon} title={service.title} />
        ))}
      </ServicesContainer>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  max-width: 1450px;
  padding: 0 10px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 95px max-content 35px max-content 95px max-content;
  grid-template-areas:
    "........"
    "title   "
    "........"
    "buttons "
    "........"
    "services"
    "........";

  padding-bottom: 80px;

  @media (max-width: 1100px) {
    padding-bottom: 60px;
  }
`;

const TitleStyled = styled.h1`
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

const ButtonsContainerStyled = styled.div`
  grid-area: buttons;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
`;

const HomePageButtonStyled = styled(ButtonStyled)`
  padding: 15px 40px;

  @media (max-width: 720px) {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.2px;
  }
`;

const ServicesContainer = styled.div`
  grid-area: services;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
