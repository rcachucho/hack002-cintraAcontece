import React from 'react';
import { Link } from 'react-router-dom';

function CreateEvent() {
    return (
        <div>
            <Link to="/eventform">
                <button> Criar evento </button>
            </Link>

        </div>
    )
}

export default CreateEvent