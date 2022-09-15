import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom';

import { userLogout } from '../features/user/user-slice'
import * as Storage from '../services/Storage'

import styles from '../assets/styles/components/Navbar.module.scss'

export default function Navbar() {

    // des essais pour raccourcir Storage.getUser().payload.user
    // Storage.getUser doit exister au préalable pour stocker objet dans une variable
    // la condition if ne peut être que faite dans le hook useEffect et pas avant
    // dans le useEffect, la valeur infos ne change pas, elle reste nulle SAUF si on sauvegarde à nouveau le fichier


    /* useEffect( () => {
        if(Storage.getUser()) {
            setPhoto( Storage.getUser().payload.user )
        }
    }, []) */
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = (event) => {
		event.preventDefault()
        dispatch( userLogout() )
        navigate('/login')
	}

    return (
        Storage.getUser() && 
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Entreprise</NavLink>
                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link">
                                    Bonjour <NavLink to={`/user/${ Storage.getUser().id }`}>{Storage.getUser().firstname}</NavLink> !
                                </span>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/coworkers">Rencontrer l'équipe</NavLink>
                            </li>
                            { Storage.getUser().isAdmin &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/addUser">Ajouter à l'équipe</NavLink>
                                </li>
                            }
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={ logOut }>Déconnexion</a>
                            </li>
                        </ul>
                    </div>
                        
            </div>
        </nav>
    )
}
