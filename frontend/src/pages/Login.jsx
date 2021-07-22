import React from 'react'
import "../styles/Login.css"
import { useHistory } from "react-router";
function Login() {
    const history = useHistory();
    return (
        <div className="loginbackground">
            <img className="logominlog" src="images/logocintramin.png" />


            <div className="logincontainer">
                <h1>Login</h1>
                <form>
                    <label className="loginlabel" >E-mail</label>
                    <input
                        type="email"
                        placeholder="Insira o seu e-mail"
                        className="logininput"
                        required
                    />

                    <label className="loginlabel" >Password</label>
                    <input
                        type="password"
                        placeholder="Insira a sua password"
                        className="logininput"
                        required
                    />

                    <div>
                        <button type="submit" className="signinbutton" onClick={() => history.push("/homepage")}
                        >Efetuar Login
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default Login