import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/CreateEvent.css"

function CreateEvent() {
    return (
        <div>
            <Link to="/eventform">
                <button className="createeventbutton"> Criar evento </button>
            </Link>

        </div>
    )
}

export default CreateEvent