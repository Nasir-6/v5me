import React from "react";
import { finished } from "stream";
import logo from '../assets/v5me-logo-white.png'
import { useNavigate } from "react-router-dom";

interface SignUpProps {}



export const SignUp: React.FC<SignUpProps> = ({}) => {

  const navigate = useNavigate();
  const handleFirstForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(event);
    // event.target.classList.add("signup_form-finish");
    // console.log(event.target.classList);
    navigate("/register")

    // CAN Redirect to Verify email page here!!
  };
  return (
    <div className="signup_page flex-column">
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>
      <form
        action=""
        className="signup_form flex-column"
        onSubmit={handleFirstForm}
      >
        <h1 className="sign_page-header">Sign Up</h1>
        <input
          type="email"
          name="email"
          id="email_input"
          placeholder="Email"
          className="input_field"
        />
        <input
          type="password"
          name="email"
          id="email_input"
          placeholder="Password"
          className="input_field"
        />
        <input
          type="submit"
          name=""
          id=""
          className="btn"
          value="Create Account"
        />

        <p>---- or ----</p>
        <button className="btn btn-google"> Sign up with Google</button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};
