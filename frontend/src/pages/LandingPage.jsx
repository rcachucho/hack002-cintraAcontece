import React from 'react'
import SignUp from './SignUp'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'
import "../styles/LandingPage.css"


function LandingPage() {
    return (
        <div className="lbackground">
            <div>
                <img className="logolanding" src="images/cintralogo.png"/>
            </div>
            <div>
            <Link to="/homepage">
                <button className="button1">Quero saber o que acontece em Sintra</button>
            </Link>
            <Link to="/signup">
            <button className="button2">Sou um espaço cultural e quero publicitar o meu evento</button>
            </Link>
            </div>
            
        </div>
    )
}


export default LandingPage