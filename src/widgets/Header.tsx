import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "@/shared/Logo";
import { ButtonStyled } from "@/shared/ButtonStyled";
import { useLoginModalStore } from "@/features/LoginModal/LoginModalStore";
import { useUserModalStore } from "@/entities/User/UserModalStore";

export const Header = () => {
  const navigate = useNavigate();
  const logoButtonClickHandler = () => navigate("/");

  const { setIsOpen: setIsOpenLoginModal } = useLoginModalStore();
  const { name } = useUserModalStore();

  const loginButtonClickHandler = () => {
    if (name) {
      navigate("/profile");
      return;
    }
    setIsOpenLoginModal(true);
  };

  return (
    <HeaderStyled>
      <LogoContainer onClick={logoButtonClickHandler}>
        <Logo />
      </LogoContainer>
      <NavStyled>
        <LinkStyled to="/contacts">Контакты</LinkStyled>
      </NavStyled>
      <LoginButtonStyled largeContent outline onClick={loginButtonClickHandler}>
        {name ? "Профиль" : "Войти"}
      </LoginButtonStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 70px;
  border-bottom: 1px solid #000000;

  @media (max-width: 720px) {
    padding: 0 10px;
  }
`;

const NavStyled = styled.nav`
  margin-left: auto;
  margin-right: 60px;

  @media (max-width: 720px) {
    margin-right: 10px;
  }
`;

const LinkStyled = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  text-decoration: none;
`;

const LoginButtonStyled = styled(ButtonStyled)`
  width: 185px;
  height: 40px;
  gap: 10px;
  background: #ffffff;

  @media (max-width: 720px) {
    width: 110px;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;
