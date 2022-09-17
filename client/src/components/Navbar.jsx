import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'

import { userLogout } from '../features/user/user-slice'
import * as Storage from '../services/Storage'

import styles from '../assets/styles/components/Navbar.module.scss'

import logo from '../assets/img/logo-ocom.png'
import logoMini from '../assets/img/logo-ocom--mini.png'

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

                    <NavLink className={`navbar-brand ${ styles.brand }`} to="/">
                        <figure className={styles.logoLarge}>
                            <img src={logo} alt="Logo O'Communication" />
                        </figure>
                        <figure className={styles.logoMini}>
                            <img src={logoMini} alt="Logo O'Communication" />
                        </figure>
                    </NavLink>
                        
                    
                    
                    <div className="navbar-links d-flex">
                        <NavLink className={`${ styles.profile } nav-link`} to={`/user/${ Storage.getUser().id }`}>
                            <img className={ styles.avatar } src={ Storage.getUser().photo } />
                            <span>Bonjour, {Storage.getUser().firstname} !</span>
                        </NavLink>

                        <ul className="navbar-nav mb-lg-0 justify-content-end d-flex flex-row">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/coworkers">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <span className={ styles.linkText }>Collaborateurs</span>
                                </NavLink>
                            </li>
                            { Storage.getUser().isAdmin &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/addUser">
                                        <FontAwesomeIcon icon={faUserPlus} /> 
                                        <span className={ styles.linkText }>Ajouter</span>
                                    </NavLink>
                                </li>
                            }
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={ logOut }>
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                    <span className={ styles.linkText }>Déconnexion</span>
                                </a>
                            </li>

                        </ul>

                    </div>
                    
                        
            </div>
        </nav>
    )
}
