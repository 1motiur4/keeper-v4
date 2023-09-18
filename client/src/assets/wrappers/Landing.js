import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;

  .logo {
    width: 100vw;
    max-width: 600px;
  }

  button {
    background-color: #FFD800;
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
    background-color: #FF6A00;
  }

  .buttons-container {
    padding-bottom: 20px;
  }

  .btn {
    border-radius: 10px;
    margin-top: 20px;
  }

  input {
    font-size: 1.5em;
    border-radius: 10px;
    padding: 5px;
  }
`;

export default Wrapper;
