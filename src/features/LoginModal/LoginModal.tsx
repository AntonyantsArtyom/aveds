import { Modal } from "antd";
import { useLoginModalStore } from "./LoginModalStore";
import styled from "styled-components";
import { ButtonStyled } from "../../shared/ButtonStyled";
import { useState } from "react";
import { useUserModalStore } from "../../entities/User/UserModalStore";
import { useNavigate } from "react-router-dom";

export const LoginModal = () => {
  const { isOpen, setIsOpen } = useLoginModalStore();

  const cancelClickHandler = () => setIsOpen(false);
  const [inputLogin, setInputLogin] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState<{ field: string | null; message: string }>({ field: null, message: "" });

  const { setLogin } = useUserModalStore();
  const navigate = useNavigate();

  const LoginClickHandler = () => {
    if (inputLogin.length === 0) {
      setError({ field: "login", message: "Введите логин" });
      return;
    }
    if (inputPassword.length < 8) {
      setError({ field: "password", message: "Пароль должен быть не менее 8 символов" });
      return;
    }

    setIsOpen(false);
    setInputLogin("");
    setInputPassword("");
    setError({ field: null, message: "" });
    setLogin(inputLogin);
    navigate("/profile");
  };

  const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLogin(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };

  return (
    <Modal open={isOpen} onCancel={cancelClickHandler} footer={null}>
      <ContainerStyled>
        <InputStyled value={inputLogin} onChange={loginChangeHandler} placeholder="логин" />
        {error.field === "login" && <ErrorTextStyled>{error.message}</ErrorTextStyled>}
        <InputStyled value={inputPassword} onChange={passwordChangeHandler} placeholder="пароль" />
        {error.field === "password" && <ErrorTextStyled>{error.message}</ErrorTextStyled>}
        <FormButtonStyled largeContent onClick={LoginClickHandler}>
          Войти
        </FormButtonStyled>
      </ContainerStyled>
    </Modal>
  );
};

const ContainerStyled = styled.div`
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const ErrorTextStyled = styled.p`
  color: #ff685b;
  font-size: 18px;
`;

const InputStyled = styled.input`
  padding-left: 10px;
  display: block;
  width: 100%;
  height: 40px;
  font-size: 16px;
`;

const FormButtonStyled = styled(ButtonStyled)`
  padding: 15px 40px;
`;
