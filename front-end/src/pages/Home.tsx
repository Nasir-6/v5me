import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/v5me-logo-white.png'
import {Button} from '../components/Button'

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate();

  return(
    <div className="home-page flex">

        <nav className="navbar flex">
        <img src={logo} alt="" className="logo-nav"/>
        <Button text="Register" handleBtnClick={() => navigate("/register")}/>
        </nav>

        <div className="home-page-overlay flex">

        <img src={logo} alt="" className="logo"/>
        <h2 className="slogan">Be the first to give your car the attention it deserves</h2>
        <button className="btn" onClick={() => navigate("/register")}>Register</button>

        </div>
        <footer className="footer flex">
            <a href="mailto:info@v5me.app">info@v5me.app</a>
            <a href="https://twitter.com/V5meHQ" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <p>© 2022 V5Me</p>
        </footer>
    </div>


  ) 
};
