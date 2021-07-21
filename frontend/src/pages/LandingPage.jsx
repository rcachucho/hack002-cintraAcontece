import React from 'react'
import SignUp from './SignUp'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'


function LandingPage() {
    return (
        <div>
            <h1> Landing Page</h1>
            <Link to="/homepage">
                <button>Quero saber o que acontece em Cintra</button>
            </Link>
            <Link to="/signup">
            <button>Sou um espaço cultural e quero publicitar o meu evento</button>
            </Link>
        </div>
    )
}


export default LandingPage