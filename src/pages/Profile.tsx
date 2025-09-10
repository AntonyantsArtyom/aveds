import styled from "styled-components";
import { TitleStyled } from "../shared/TitleStyled";
import { ButtonStyled } from "../shared/ButtonStyled";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserModalStore } from "../entities/User/UserModalStore";

export const Profile = () => {
  const navigate = useNavigate();
  const contactsButtonClickHandler = () => navigate("/contacts");
  const { login, setLogin } = useUserModalStore();
  const logoutButtonClickHandler = () => setLogin(null);

  if (!login) {
    return <Navigate to="/" replace />;
  }

  return (
    <ContainerStyled>
      <TitleStyled>{`Привет, ${login}`}</TitleStyled>
      <ButtonsContainerStyled>
        <ProfilePageButtonStyled onClick={logoutButtonClickHandler}>Выйти из аккаунта</ProfilePageButtonStyled>
        <ProfilePageButtonStyled outline onClick={contactsButtonClickHandler}>
          Перейти в контакты
        </ProfilePageButtonStyled>
      </ButtonsContainerStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  max-width: 1450px;
  padding: 0 195px;
  padding-right: 50px;
  min-height: calc(100dvh - 80px);

  padding-bottom: 85px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content 35px max-content 1fr;
  grid-template-areas:
    "......."
    "title  "
    "......."
    "buttons"
    ".......";

  @media (max-width: 720px) {
    padding: 0px 10px;
    align-content: start;

    grid-template-rows: 95px max-content 10px max-content 1fr;
  }
`;

const ButtonsContainerStyled = styled.div`
  grid-area: buttons;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
`;

const ProfilePageButtonStyled = styled(ButtonStyled)`
  padding: 15px 40px;

  @media (max-width: 720px) {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.2px;
  }
`;
