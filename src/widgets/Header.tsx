import styled from "styled-components";
import { Logo } from "../shared/logo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <NavStyled>
        <LinkStyled to="/contacts">Контакты</LinkStyled>
      </NavStyled>
      <LoginButtonStyled>Войти</LoginButtonStyled>
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

const LoginButtonStyled = styled.button`
  width: 185px;
  height: 40px;

  gap: 10px;
  background: #ffffff;
  border: 2px solid #ff685b;
  border-radius: 7px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ff685b;

  @media (max-width: 720px) {
    width: 110px;
  }
`;
