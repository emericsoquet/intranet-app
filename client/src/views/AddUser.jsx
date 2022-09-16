import React, { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import { addUser } from '../services/manage.service'
import * as Storage from '../services/Storage'

export default function AddUser() {

    const[newUser, setNewUser] = useState(
        {
            "gender": "",
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": "",
            "phone": "",
            "birthdate": "",
            "city": "",
            "country": "",
            "photo": "",
            "service": ""
        }
    )
    console.log(newUser)

    const addNewUser = (event) => {
        event.preventDefault()
    
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false
        })

        addUser(newUser).then(
            console.log('SUCCESS!'),
            Toast.fire({
                title: `${newUser.firstname} a bien été ajouté${ newUser.gender === 'female' ? 'e' : '' } à l'Intranet`,
                icon: 'success',
            })
        ).catch( error => 
            console.log(error.response) 
        )
    }

    const handleAddition = (event) => {
        const user = { ...newUser }
        const { value, name } = event.target
        user[name] = value
        setNewUser(user)
        // l'objet n'est pas réitérable
        /* setNewUser( ...newUser, {[name]: value} ) */
    }

    return (
        <section onSubmit={ addNewUser }>
                <h2>Ajout d'un utilisateur</h2>
                <form>

                    <div className="input-group">
                        <label htmlFor='userGender'>Genre</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userGender" name="gender"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userService'>Service</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userService" name="service"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userLastname'>Nom</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userLastname" name="lastname"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userFirstname'>Prénom</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userFirstname" name="firstname"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userEmail'>E-mail</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userEmail" name="email"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userPassword'>Mot de passe</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userPassword" name="password"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userBirthDate'>Date de naissance</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userBirthdate" name="birthdate"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userPhone'>Téléphone</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userPhone" name="phone"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userCity'>Ville</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userCity" name="city"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userCountry'>Pays</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userCountry" name="country"></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor='userPhoto'>Photo</label>
                        <input  type="text" onChange={handleAddition} 
                                id="userPhoto" name="photo"></input>
                    </div>

                    { Storage.getUser().isAdmin &&
                        <div className="form-check">
                            <input  className="form-check-label" type="checkbox" onChange={handleAddition}
                                    id="userAdmin" name="isAdmin"
                                     ></input>
                            <label className="form-check-label" htmlFor="userAdmin">
                                Administrateur
                            </label>
                        </div>
                    }

                    <button type="submit">Ajouter</button>
                </form>
            </section>
    )
}
