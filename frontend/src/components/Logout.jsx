import React from 'react'
import { useHistory } from 'react-router'
import "../styles/Logout.css"


function Logout(){
    const history = useHistory()
    return <button className="logoutbutton" onClick={() => history.push("/")}>Logout</button>
}

export default Logout