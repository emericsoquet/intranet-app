import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from '../services/users.service'
import { updateUser } from '../services/manage.service'

import { update } from '../features/user/user-slice'
import { setUser } from '../features/profile/profile-slice'

export default function Profile() {

    const[profile, setProfile] = useState()

    // récupération de l'id dans l'url après "user/"
    const params = useParams()
    const user = useSelector((state) => state.user)
    console.log(user)

    useEffect( () => {
		getUser(params.id).then(element => setProfile(element))
	}, [])

    const updateProfile = (event) => {
        event.preventDefault()
		updateUser(params.id, profile).then(
            console.log('SUCCESS!')
        ).catch( error => 
            console.log(error.response) 
        )
	}
    console.log(profile)

    const handleChanges = (event) => {
        const { value, name } = event.target
        setProfile({...profile, [name]: value})
    }

    return (

        profile && 
            <section>
                <h2>Profil de { profile.firstname }</h2>
                <form onSubmit={ updateProfile }>

                    <div className="input-group">
                        <label htmlFor='userLastname'>Nom</label>
                        <input  type="text" defaultValue={ profile.lastname } onChange={handleChanges} 
                                id="userLastname" name="lastname"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userFirstname'>Prénom</label>
                        <input  type="text" defaultValue={ profile.firstname } onChange={handleChanges} 
                                id="userFirstname" name="firstname"></input>
                    </div>

                    <button>Modifier</button>
                </form>
            </section>
    )
}
