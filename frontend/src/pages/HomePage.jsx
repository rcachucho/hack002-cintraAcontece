import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar'
import CreateEvent from '../components/CreateEvent'
import Event from '../components/Event'
import Logout from '../components/Logout'

function HomePage() {
    const [user, setUser] = useState(false)

    useEffect(() => {
        setUser(true)
    }, [])

    if (user) {
        return (
            <div>
                <Calendar />
                <Event />
                <CreateEvent />
                <Logout/>
            </div>
        )
    } else return (
        <div>
            <Calendar />
            <Event />
        </div>
    )
} 


export default HomePage