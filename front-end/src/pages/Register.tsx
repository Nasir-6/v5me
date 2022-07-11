import React from "react";
import { finished } from "stream";
import logo from '../assets/v5me-logo-white.png'

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {

    const handleFirstForm = (event:any) :void => {
        // FIGURE OUT event type!!  React.ChangeEvent<HTMLInputElement>
        
        event.preventDefault();
        console.log(event.target.classList);
        event.target.classList.add("register_form-finish");
        console.log(event.target.classList);
        
    }
  return(
    
    <div className="register_page flex-column">
         <a href="/"><img src={logo} alt="" className="logo"/></a>
        <form action="" className="register_form flex-column" onSubmit={handleFirstForm}>
            <h1>Register</h1>
            <input type="email" name="email" id="email_input" placeholder="Email" className="input_field"/>
            <input type="password" name="email" id="email_input" placeholder="Password" className="input_field"/>
            <input type="submit" name="" id="" className="btn" value="Create Account"/>

            <p>---- or ----</p>
            <button className="btn btn-google">  Sign up with Google</button>
            
            <p>Already have an account? <a>Login</a></p>
        </form>

        
    
    </div>
  
  )
};
