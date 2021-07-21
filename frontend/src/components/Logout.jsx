import React from 'react'
import { useHistory } from 'react-router'


function Logout(){
    const history = useHistory()
    return <button onClick={() => history.push("/")}>Logout</button>
}

export default Logout