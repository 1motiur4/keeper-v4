import Wrapper from "../assets/wrappers/Landing";

const Landing = () => {
  return (
    <Wrapper>
      <div className="box">
        <div className="buttons-container">
          <button
            type="button"
            name="login-btn"
            className="login-btn"
          >
            Login
          </button>
          <button
            type="button"
            name="register-btn"
            className="register-btn"
          >
            Register
          </button>
        </div>
        <form className="form-div">
          <label htmlFor="login">Login</label>
          <input
            type="text"
            name="login"
          />
          <br></br>
          <label htmlFor="register">Register</label>
          <input
            type="text"
            name="register"
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};
export default Landing;
