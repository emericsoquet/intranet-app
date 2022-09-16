import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import { getUser } from '../services/users.service'
import { updateUser } from '../services/manage.service'

import * as Storage from '../services/Storage'

export default function Profile() {

    const[profile, setProfile] = useState()

    // récupération de l'id dans l'url après "user/"
    const userId = Storage.getUser().id
    const user = useSelector((state) => state.user)

    useEffect( () => {
		getUser(userId).then(element => setProfile(element))
	}, [])

    const updateProfile = (event) => {
        event.preventDefault()

        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false
        })

        updateUser(params.id, profile).then(
            console.log('SUCCESS!'),
            Toast.fire({
                title: `Le profil a bien été modifié`,
                icon: 'success',
            })
        ).catch( error => 
            console.log(error.response) 
        )
	}

    const handleChanges = (event) => {
        const { value, name } = event.target
        setProfile( {...profile, [name]: value} )
    }

    return (

        profile && 
            <section>
                <h2>Profil de { profile.firstname }</h2>
                <form onSubmit={ updateProfile }>

                    <div className="input-group">
                        <label htmlFor='userGender'>Genre</label>
                        <input  type="text" defaultValue={ profile.gender } onChange={handleChanges} 
                                id="userGender" name="gender"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userService'>Service</label>
                        <input  type="text" defaultValue={ profile.service } onChange={handleChanges} 
                                id="userService" name="service"></input>
                    </div>
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
                    <div className="input-group">
                        <label htmlFor='userEmail'>E-mail</label>
                        <input  type="text" defaultValue={ profile.email } onChange={handleChanges} 
                                id="userEmail" name="email"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userPassword'>Mot de passe</label>
                        <input  type="text" defaultValue={ profile.password } onChange={handleChanges} 
                                id="userPassword" name="password"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userConfirmPassword'>Confirmation</label>
                        <input  type="text"
                                id="userConfirmPassword" name="confirmPassword"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userBirthDate'>Date de naissance</label>
                        <input  type="text" defaultValue={ profile.birthdate } onChange={handleChanges} 
                                id="userBirthdate" name="birthdate"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userPhone'>Téléphone</label>
                        <input  type="text" defaultValue={ profile.phone } onChange={handleChanges} 
                                id="userPhone" name="phone"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userCity'>Ville</label>
                        <input  type="text" defaultValue={ profile.city } onChange={handleChanges} 
                                id="userCity" name="city"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userCountry'>Pays</label>
                        <input  type="text" defaultValue={ profile.country } onChange={handleChanges} 
                                id="userCountry" name="country"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userPhoto'>Photo</label>
                        <input  type="text" defaultValue={ profile.photo } onChange={handleChanges} 
                                id="userPhoto" name="photo"></input>
                    </div>

                    { Storage.getUser().isAdmin &&
                        <div className="form-check">
                            <input  className="form-check-label" type="checkbox" onChange={handleChanges}
                                    id="userAdmin" name="isAdmin"
                                     ></input>
                            <label className="form-check-label" htmlFor="userAdmin">
                                Administrateur
                            </label>
                        </div>
                    }

                    <button type="submit">Modifier</button>
                </form>
            </section>
    )
}
