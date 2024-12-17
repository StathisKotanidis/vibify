import styled from "styled-components";
import { AiOutlineSpotify } from "react-icons/ai";

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
`;

const LoginButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 5px;
  background-color: #1fdf64;
  border: 1px solid #1fdf64;

  span {
    font-weight: 500;
    font-size: 1rem;
  }

  &:hover {
    background-color: #18b24d;
    border: 1px solid #18b24d;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const StyledSpotifyIcon = styled(AiOutlineSpotify)`
  width: 20px;
  height: 20px;
`;

function LoginButton() {
  return (
    <LoginButtonContainer>
      <LoginButtonStyled>
        <span>Login with </span>
        <StyledSpotifyIcon />
      </LoginButtonStyled>
    </LoginButtonContainer>
  );
}

export default LoginButton;
