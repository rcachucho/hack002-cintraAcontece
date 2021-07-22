import React from 'react'
import "../styles/Login.css"
import { useHistory } from "react-router";
function Login() {
    const history = useHistory();
    return (
        <div>

            <h1>Login</h1>

            <div>

                <form>
                    <label className="emaillabel" >E-mail</label>
                    <input
                        type="email"
                        placeholder="Insira o seu e-mail"
                        className="emailinput"
                        required
                    />

                    <label className="passwordlabel" >Password</label>
                    <input
                        type="password"
                        placeholder="Insira a sua password"
                        className="passwordinput"
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