import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;

  .logo {
    width: 100vw;
    max-width: 400px;
  }

  button {
    background-color: #ffd800;
    font-size: 1.5em;
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
    text-align: center;
    padding-bottom: 20px;
    padding-top: 20px;
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
    /* font-size: 1.5em; */
    max-width: 400px;
    width: 80%vw;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    background-color: white;
  }

  @media (min-width: 700px) {
    text-align: left;

    .top-bg-bar {
      width: 100%vw;
      height: 75px;
      background-color: #DCD3FF;
      z-index: 1;
    }

    .logo {
      max-width: 300px;
    }
  }
`;

export default Wrapper;
