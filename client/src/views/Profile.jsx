import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUser } from '../services/users.service'

export default function Profile() {

    // récupération de l'id dans l'url après "user/"
    const params = useParams()

    const[profile, setProfile] = useState()

    useEffect( () => {
		getUser(params.id).then(element => setProfile(element))
	}, [])

    return (

        profile && 
            <section>
                Profil de { profile.firstname }
            </section>
    )
}
