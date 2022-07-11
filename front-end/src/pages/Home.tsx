import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/v5me-logo-white.png'
import {Button} from '../components/Button'

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate();

  return(
    <div className="home_page flex-column">

        <nav className="navbar flex-row">
        <a href="/"><img src={logo} alt="" className="logo-nav"/></a>
        <Button text="Sign Up" onClick={() => navigate("/signup")}/>
        </nav>

        <div className="home_page_overlay flex-column">

        <img src={logo} alt="" className="logo"/>
        <h2 className="slogan">Be the first to give your car the attention it deserves</h2>
        <Button text="Try it out" onClick={() => navigate("/signup")}/>

        </div>
        <footer className="footer flex-row">
            <a href="mailto:info@v5me.app">info@v5me.app</a>
            <a href="https://twitter.com/V5meHQ" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <p>© 2022 V5Me</p>
        </footer>
    </div>


  ) 
};
