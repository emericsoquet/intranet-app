import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

import { userLogout } from '../features/user/user-slice'

export default function Navbar() {

    const userInfos = useSelector((state) => state.user.userInfo);
    console.log(userInfos)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = (event) => {
		event.preventDefault()
        dispatch( userLogout() )
        navigate('/login')
		/* authentification(email, password)
			.then( (data) => {
				dispatch( userLogin(data) )
				Storage.setToken(data.token)
				Storage.setUserId(data.user.id)
				navigate('/')
			}) */
	}

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Entreprise</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                

                    { (Object.keys(userInfos).length !== 0 && userInfos != null) && 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Collaborateurs</a>
                                </li>
                                <li>
                                    <a className="nav-link">Profil de { userInfos.user.firstname }</a>
                                </li>
                                <li className="nav-item" onClick={ logOut }>
                                    Déconnexion
                                </li>
                            </ul>
                        </div>
                    }
                    
            </div>
        </nav>
    )
}
