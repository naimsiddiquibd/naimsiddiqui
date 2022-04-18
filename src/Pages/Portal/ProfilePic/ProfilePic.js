import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Portal from '../Portal/Portal';




const ProfilePic = () => {

    const { user } = useAuth();
    const { displayName, email } = user;
   
    const [savedUsers, setSavedUser] = useState([]);

    useEffect(() => {
        fetch(`https://lit-garden-79524.herokuapp.com/users/${email}`)
            .then(res => res.json())
            .then(data => setSavedUser(data))
    }, [])

    return (
        <div>
                    <h1>{savedUsers.name}</h1>
        </div>
    );
};

export default ProfilePic;