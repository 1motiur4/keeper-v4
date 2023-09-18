import Wrapper from "../assets/wrappers/Landing";
import Logo from "../assets/keeper-v4-logo.png";

const Landing = () => {
  const initialState = {
    name: "", 
    
    password: "",
    
  }


  return (
    <Wrapper>
      <img src={Logo} className="logo"/>

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
        <form className="login-form-div">
          <input
            type="text"
            name="email"
            placeholder="email"
          />
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="password"
          />
          <br></br>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};
export default Landing;
