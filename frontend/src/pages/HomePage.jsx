import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar'
import CreateEvent from '../components/CreateEvent'
import Event from '../components/Event'
import Logout from '../components/Logout'
import "../styles/HomePage.css"

function HomePage() {
    const [user, setUser] = useState(false)

    useEffect(() => {
        setUser(true)
    }, [])

    if (user) {
        return (
            
            <div className="wholescreen">
                <img className="logohome" src="images/logocintramin.png" />
                <div className="homebuttons">
                    <CreateEvent />
                    <Logout />
                </div>
                <div>
                    <Event /> 

                </div>

                
            </div>
        )
    } else return (
        <div >
            <Calendar />
            <Event />
        </div>
    )
}


export default HomePage