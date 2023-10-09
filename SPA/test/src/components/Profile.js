import React from 'react';
import { useParams } from 'react-router-dom';
import profilesData from '../data/profiles.json';

function Profile() {
    const { id } = useParams();

    // Convertir l'ID en nombre (integer)
    const profileId = parseInt(id, 10);

    // Vérifier si l'ID est un nombre valide
    if (isNaN(profileId)) {
        return <div className="container mt-3">ID de profil non valide</div>;
    }

    // Recherche du profil correspondant à l'ID dans le tableau
    const profile = profilesData.find(user => user.id === profileId);

    if (!profile) {
        return <div className="container mt-3">Profil non trouvé</div>;
    }

    return (
        <div className="container mt-3">
            <div className="profile">
                <img src={profile.avatar} alt={profile.name} />
                <h1>{profile.name}</h1>
                <p>Email: {profile.email}</p>
                <p>{profile.bio}</p>
            </div>
        </div>
    );
}

export default Profile;
