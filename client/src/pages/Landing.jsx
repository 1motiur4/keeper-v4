import Wrapper from "../assets/wrappers/Landing";
import Logo from "../assets/keeper-v4-logo.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/userSlice";
import { Outlet } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  login: true,
};

const Landing = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = values;

    if (values.login) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(registerUser({ firstName, lastName, email, password }));
    }
  };

  return (
    <Wrapper>
      <div className="top-bg-bar">
        <img
          src={Logo}
          className="logo"
        />
      </div>

      <div className="box">
        <div className="buttons-container">
          <button
            type="button"
            name="login-btn"
            className={`login-btn ${values.login ? "active-btn" : null}`}
            onClick={() => {
              setValues({ ...values, login: true });
            }}
          >
            Login
          </button>
          <button
            type="button"
            name="register-btn"
            className={`register-btn ${values.login ? null : "active-btn"}`}
            onClick={() => {
              setValues({ ...values, login: false });
            }}
          >
            Register
          </button>
        </div>
        <form
          className="login-form-div"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
            hidden={values.login}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
            hidden={values.login}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
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
