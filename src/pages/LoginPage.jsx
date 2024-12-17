import styled from "styled-components";
import loginBackground from "../images/login-background.jpg";
import Logo from "../ui/Logo";
import LoginButton from "../ui/LoginButton";
import SignUp from "../ui/SignUp";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${loginBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const LoginContainer = styled.div`
  height: 90%;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #9ba09b;
  opacity: 0.6;
  padding: 0.5rem;
`;

function LoginPage() {
  return (
    <Background>
      <LoginContainer>
        <Logo />
        <LoginButton />
        <SignUp />
      </LoginContainer>
    </Background>
  );
}

export default LoginPage;
