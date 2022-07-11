import React from "react";
import { finished } from "stream";
import logo from '../assets/v5me-logo-white.png'

interface LoginProps {}



export const Login: React.FC<LoginProps> = ({}) => {

    const handleFirstForm = (event:React.SyntheticEvent)  => {
        
        event.preventDefault();
        console.log(event);
        // event.target.classList.add("register_form-finish");
        // console.log(event.target.classList);
        
    }
  return(
    
    <div className="login_page flex-column">
         <a href="/"><img src={logo} alt="" className="logo"/></a>
        <form action="" className="login_form flex-column" onSubmit={handleFirstForm}>
            <h1>Login</h1>
            <input type="email" name="email" id="email_input" placeholder="Email" className="input_field"/>
            <input type="password" name="email" id="email_input" placeholder="Password" className="input_field"/>
            <input type="submit" name="" id="" className="btn" value="Login"/>

            <p>---- or ----</p>
            <button className="btn btn-google">  Login with Google</button>
            
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </form>

        
    
    </div>
  
  )
};
