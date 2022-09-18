import React, { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import { addUser } from '../services/manage.service'
import * as Storage from '../services/Storage'

import styles from '../assets/styles/components/Form.module.scss'

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
        <section className='main'>

            <form onSubmit={ addNewUser }>

                <div className={ styles.heading }>
                    <h2>Ajouter un utilisateur</h2>
                    <p>Tous les champs doivent être renseignés pour ajouter l'utilisateur</p>
                </div>

                <div className={ styles.wrapper }>

                    <fieldset className="d-flex flex-wrap">
                        <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                            <label htmlFor='userFirstname'>Prénom</label>
                            <input  type="text" onChange={handleAddition} 
                                    id="userFirstname" name="firstname"
                                    required></input>
                        </div>
                        <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                            <label htmlFor='userLastname'>Nom</label>
                            <input  type="text" onChange={handleAddition} 
                                    id="userLastname" name="lastname"
                                    required></input>
                        </div>
                    </fieldset>

                    <fieldset className="d-flex flex-wrap">
                        <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                            <label htmlFor='userGender'>Genre</label>
                            <select className="form-select"
                                    onChange={handleAddition}
                                    id="userGender" 
                                    name="gender" required>
                                <option value="">-- Choisir --</option>
                                <option value="female">Femme</option>
                                <option value="male">Homme</option>
                            </select>
                        </div>
                        <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                            <label htmlFor='userService'>Service</label>
                            <select className="form-select"
                                    onChange={handleAddition}
                                    id="userService" 
                                    name="service" required >
                                <option value="">-- Choisir --</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Technique">Technique</option>
                                <option value="Client">Client</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className={` input.group ${ styles.inputGroup }`}>
                                <label htmlFor='userEmail'>E-mail</label>
                                <input  type="text" onChange={handleAddition} 
                                        id="userEmail" name="email"
                                        required></input>
                        </div>
                    </fieldset>

                    <fieldset className="d-flex flex-wrap">
                        <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                            <label htmlFor='userCity'>Ville</label>
                            <input  type="text" onChange={handleAddition} 
                                    id="userCity" name="city"
                                    required></input>
                        </div>
                        <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                            <label htmlFor='userCountry'>Pays</label>
                            <input  type="text" onChange={handleAddition} 
                                    id="userCountry" name="country"
                                    required></input>
                        </div>
                    </fieldset>
                    
                    <fieldset className="d-flex flex-wrap">
                        <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                            <label htmlFor='userPhone'>Téléphone</label>
                            <input  type="tel" onChange={handleAddition} 
                                    id="userPhone" name="phone"
                                    required></input>
                        </div>
                        <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                            <label htmlFor='userBirthDate'>Date de naissance</label>
                            <input  type="date" onChange={handleAddition} 
                                    id="userBirthdate" name="birthdate"
                                    required></input>
                        </div>
                    </fieldset>

                    <fieldset className="d-flex flex-wrap">
                        <div className={` input.group ${ styles.inputGroup }`}>
                            <label htmlFor='userPassword'>Mot de passe</label>
                            <input  type="password" onChange={handleAddition} 
                                    id="userPassword" name="password"
                                    minLength={8}
                                    placeholder="8 caractères minimum" required
                                    ></input>
                        </div>
                    </fieldset>
                    
                    <fieldset>
                        <div className={` input.group ${ styles.inputGroup }`}>
                            <label htmlFor='userPhoto'>Photo</label>
                            <input  type="text" onChange={handleAddition} 
                                    id="userPhoto" name="photo"
                                    required></input>
                        </div>
                    </fieldset>

                    <fieldset className={`d-flex flex-wrap ${ styles.buttons }`}>
                        <button type="submit">Valider ces informations</button>
                    </fieldset>
                    

                </div>
            </form>
                {/* <form>

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
                </form> */}
        </section>
    )
}
