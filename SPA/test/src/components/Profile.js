import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const { id } = useParams();

    return (
        <div className="container mt-3">
            <h1>Profile</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">ID : { id }</li>

            </ul>
        </div>
    )
}


export default Profile;