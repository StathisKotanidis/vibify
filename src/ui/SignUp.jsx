import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 20%;

  a {
    color: black;
    font-size: 0.8rem;

    &:hover {
      color: #18b24d;
    }
  }

  span {
    font-size: 0.8rem;
  }
`;

function SignUp() {
  return (
    <SignUpContainer>
      <span>Not signed up?</span>
      <a href="https://www.spotify.com/us/signup" target="_blank">
        Create a Spotify account.
      </a>
    </SignUpContainer>
  );
}

export default SignUp;
