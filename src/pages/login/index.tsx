import styled from "@emotion/styled";
import { Button, Divider } from "antd";
import { useState } from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import LeftBg from "assets/left.svg";
import RightBg from "assets/right.svg";
import Logo from "assets/logo.svg";
export const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Conteiner>
      <Background></Background>
      <LogoDiv></LogoDiv>
      <LoginCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? (
          <Register setIsRegister={setIsRegister}></Register>
        ) : (
          <Login></Login>
        )}
        <Divider></Divider>
        <CenterDiv>
          <Button type="link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
          </Button>
        </CenterDiv>
      </LoginCard>
    </Conteiner>
  );
};
const LogoDiv = styled.div`
  width: 5rem;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10rem auto;
  padding: 5rem 5rem;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${LeftBg}), url(${RightBg});
  background-repeat: no-repeat, no-repeat;
  background-position:
    left bottom,
    right bottom;
  background-size:
    calc(((100vw - 40rem) / 2) - 3.2rem), calc(((100vw - 40rem) / 2) - 3.2rem);
  background-attachment: fixed;
`;

const Title = styled.h1`
  text-align: center;
`;
const CenterDiv = styled.div`
  text-align: center;
`;
const LoginCard = styled.div`
  width: 40rem;
  /* height: 30rem; */
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  padding: 2rem;
`;
const Conteiner = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
