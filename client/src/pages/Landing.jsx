import Wrapper from "../assets/wrappers/Landing";
import Logo from "../assets/keeper-v4-logo.png";
import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  login: true,
};

const Landing = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Wrapper>
      <img
        src={Logo}
        className="logo"
      />

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
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn"
          >
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
export default Landing;
