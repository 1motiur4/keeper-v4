import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;

  .logo {
    width: 100vw;
    max-width: 600px;
  }

  button {
    background-color: #ffd800;
    font-size: 2.5em;
    padding-left: 20px;
    padding-right: 20px;
  }

  .login-btn {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .register-btn {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .active-btn {
    background-color: #ff6a00;
  }

  .buttons-container {
    padding-bottom: 20px;
  }

  .btn {
    border-radius: 10px;
    margin-top: 20px;
  }

  .login-form-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    font-size: 1.5em;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
  }

  @media (min-width: 700px) {
    .logo {
      max-width: 400px;
      text-align: left;
    }
  }
`;

export default Wrapper;
