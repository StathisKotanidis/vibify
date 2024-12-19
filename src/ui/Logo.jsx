import styled from "styled-components";
import vibifyLogo from "../images/vibify-logo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
`;

const VibifyLogo = styled.img`
  /* width: 100%; */
  width: 100%;
  height: 300px;
  /* overflow: hidden; */
`;

function Logo() {
  return (
    <LogoContainer>
      <VibifyLogo src={vibifyLogo} alt="logo" />
    </LogoContainer>
  );
}

export default Logo;
