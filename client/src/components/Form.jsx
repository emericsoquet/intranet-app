import React, { useEffect, useState } from 'react'
import * as Storage from '../services/Storage'
import { authentification } from '../services/auth.service'

import styles from '../assets/styles/components/Form.module.scss'

export default function Form({ setProfile, profile }) {

    const[checkbox, setCheckbox] = useState()

    useEffect(() => {
        setCheckbox(document.getElementById('userAdmin'))
    }, [])

    const handleChanges = (event) => {
        const { value, name } = event.target
        { Storage.getUser().isAdmin ?
            setProfile( {...profile, [name]: value, isAdmin: checkbox.checked} )
            :
            setProfile( {...profile, [name]: value } )
        }
    }

    return (
        <>

            <div className={ styles.heading }>
                <h2>{ profile.firstname } { profile.lastname }</h2>
                <p>Pour modifier le profil, éditer les champs ci-dessous</p>
            </div>

            <div className={ styles.wrapper }>

                <fieldset className="d-flex flex-wrap">
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userFirstname'>Prénom</label>
                        <input  type="text" defaultValue={ profile.firstname } onChange={handleChanges} 
                                id="userFirstname" name="firstname"
                                required></input>
                    </div>
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userLastname'>Nom</label>
                        <input  type="text" defaultValue={ profile.lastname } onChange={handleChanges} 
                                id="userLastname" name="lastname"
                                required></input>
                    </div>
                </fieldset>

                <fieldset className="d-flex flex-wrap">
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userGender'>Genre</label>
                        <select className="form-select"
                                defaultValue={ profile.gender } 
                                onChange={handleChanges}
                                id="userGender" 
                                name="gender">
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                        </select>
                    </div>
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userService'>Service</label>
                        <select className="form-select"
                                defaultValue={ profile.service } 
                                onChange={handleChanges}
                                id="userService" 
                                name="service">
                            <option value="Marketing">Marketing</option>
                            <option value="Technique">Technique</option>
                            <option value="Client">Client</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className={` input.group ${ styles.inputGroup }`}>
                            <label htmlFor='userEmail'>E-mail</label>
                            <input  type="text" defaultValue={ profile.email } onChange={handleChanges} 
                                    id="userEmail" name="email"
                                    required></input>
                    </div>
                </fieldset>

                <fieldset className="d-flex flex-wrap">
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userCity'>Ville</label>
                        <input  type="text" defaultValue={ profile.city } onChange={handleChanges} 
                                id="userCity" name="city"
                                required></input>
                    </div>
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userCountry'>Pays</label>
                        <input  type="text" defaultValue={ profile.country } onChange={handleChanges} 
                                id="userCountry" name="country"
                                required></input>
                    </div>
                </fieldset>
                
                <fieldset className="d-flex flex-wrap">
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userPhone'>Téléphone</label>
                        <input  type="tel" defaultValue={ profile.phone } onChange={handleChanges} 
                                id="userPhone" name="phone"
                                required></input>
                    </div>
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userBirthDate'>Date de naissance</label>
                        <input  type="date" defaultValue={ profile.birthdate } onChange={handleChanges} 
                                id="userBirthdate" name="birthdate"
                                required></input>
                    </div>
                </fieldset>

                <fieldset className="d-flex flex-wrap">
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userPassword'>Mot de passe</label>
                        <input  type="password" defaultValue={ profile.password } onChange={handleChanges} 
                                id="userPassword" name="password"
                                placeholder="••••••••"></input>
                    </div>
                    <div className={` input.group ${ styles.inputGroup } ${ styles.inputGroupTwo }`}>
                        <label htmlFor='userConfirmPassword'>Confirmation</label>
                        <input  type="text"
                                id="userConfirmPassword" name="confirmPassword"></input>
                    </div>
                </fieldset>
                
                <fieldset>
                    <div className={` input.group ${ styles.inputGroup }`}>
                        <label htmlFor='userPhoto'>Photo</label>
                        <input  type="text" defaultValue={ profile.photo } onChange={handleChanges} 
                                id="userPhoto" name="photo"
                                required></input>
                    </div>
                </fieldset>

                <fieldset className={`d-flex flex-wrap ${ styles.buttons }`}>
                    { Storage.getUser().isAdmin &&
                        <div className={`form-check ${ styles.admin__group } ${ styles.inputGroupTwo } ${ profile.isAdmin ? styles.admin__remove : styles.admin__add }`}>
                            <input  className="form-check-label" type="checkbox" onChange={ handleChanges }
                                    id="userAdmin" name="isAdmin"
                                    ></input>
                            <label className="form-check-label" htmlFor="userAdmin">
                                Passer { profile.isAdmin ? 'Utilisateur' : 'Administrateur' }
                            </label>
                        </div>
                    }
                    <button type="submit" className={Storage.getUser().isAdmin && styles.inputGroupTwo}>Modifier l'utilisateur</button>
                </fieldset>
                

            </div>

        
        </>
    )
}
