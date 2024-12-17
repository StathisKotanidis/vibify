import styled from "styled-components";
import vibifyLogo from "../images/vibify-logo.png";

const LogoContainer = styled.div`
  display: flex;
  flex-basis: 50%;
`;

const VibifyLogo = styled.img`
  width: 100%;
`;

function Logo() {
  return (
    <LogoContainer>
      <VibifyLogo src={vibifyLogo} alt="logo" />
    </LogoContainer>
  );
}

export default Logo;
