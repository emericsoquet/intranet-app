import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'

import { authentification } from '../services/auth.service'
import { userLogin } from '../features/user/user-slice'
import * as Storage from '../services/Storage'

import styles from '../assets/styles/views/Login.module.scss'

const Login = () => {

  	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()


	const handleSubmit = (event) => {
		event.preventDefault()
		authentification(email, password)
			.then( (data) => {
				dispatch( userLogin(data) )
				Storage.setToken(data.token)
				Storage.setUser(data.user)
				Storage.setItem('firstname', data.user.firstname)
				Storage.setItem('photo', data.user.photo)
				navigate('/')
			})
	}


	return (
		<>  
			{
				Storage.getToken() ?
					<>
						return <Navigate to="/" />
					</>
					:
					<main className={` container ${styles.login}`}>
						<section className="row">
							<div className={`mx-auto ${styles.wrapper}`}>
								<h2>Connexion</h2>

								<p className={styles.subtitle}>
									Pour accéder à l'Intranet O'Communication, <span>veuillez remplir ces champs</span>
								</p>
								<form onSubmit={ handleSubmit }>
				
									<label htmlFor="email">E-mail</label>
									<input 	type="text"
											placeholder="Votre adresse mail" 
											id="email"
											onChange={ (event) => setEmail(event.target.value) }
											required >
									</input>
				
									<label htmlFor="password">Mot de passe</label>
									<input  placeholder="•••••••••••"
											type="password"
											id="password"
											onChange={ (event) => setPassword(event.target.value) }
											required >
									</input>
				
									<button type="submit">S'identifier</button>
								</form>
							</div>
							
						</section>
					</main>
			}
		</>
	)

}

export default Login
