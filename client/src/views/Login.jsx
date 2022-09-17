// dependencies
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'

// slices & storage
import { authentification } from '../services/auth.service'
import { userLogin } from '../features/user/user-slice'
import * as Storage from '../services/Storage'

// styles
import styles from '../assets/styles/views/Login.module.scss'

const Login = () => {

  	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [messageError, setMessageError] = useState()

	// récupération du message d'erreur après le chargement de la page
	useEffect(() => {
		setMessageError(document.getElementById('message__error'))
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault() 
		authentification(email, password) // requête login
			.then( (data) => {
				dispatch( userLogin(data) )
				// stockage de toutes les infos qui seront reprises au fil de la connexion
				Storage.setUser(data.user)
				Storage.setToken(data.token) // accorder l'accès aux pages
				Storage.setItem('firstname', data.user.firstname) // repris dans la navbar
				Storage.setItem('photo', data.user.photo) // repris dans la navbar
				Storage.setItem('id', data.user.id) // utilisé pour la modification de son propre profil
				navigate('/')
			}).catch( 
				error => 	
					console.log(error.response),
					// message d'erreur envoyé à l'utilisateur
					setTimeout(() => { // timeout parce que le message s'affiche .1s le temps de chargement pour la page si utilisateur connecté
						messageError.style.display = 'block'
					}, 300)
			)
	}

	// on retire l'erreur "mot de passe/email erroné(s)" dès qu'il y a un changement dans un input
	const disableError = () => {
		document.getElementById('message__error').style.display = 'none'
	}

	const handleEmail = (value) => {
		console.log(value)
		setEmail(value)
		disableError()
	}
	const handlePassword = (value) => {
		console.log(value)
		setPassword(value)
		disableError()
	}


	return (
		<>  
			{
				Storage.getToken() ?
					<>
						{/* s'il y a déjà un utilisateur connecté, cette page n'est pas utile donc on renvoie vers la home */}
						return <Navigate to="/" />
					</>
					:
					<main className={` container ${styles.login}`}>
						<section className="row">
							<div className={`mx-auto ${styles.wrapper}`}>
								<h2>Connexion</h2>

								<p className={`${styles.subtitle}`} id='subtitle__instruction'>
									Pour accéder à l'Intranet O'Communication, <span>veuillez remplir ces champs</span>
								</p>
								
								<form onSubmit={ handleSubmit }>
									{/* <label htmlFor="email">E-mail</label> */}
									<input 	type="text"
											placeholder="prenom.nom@example.com" 
											id="email"
											onChange={ (event) => handleEmail(event.target.value) }
											required >
									</input>
				
									{/* <label htmlFor="password">Mot de passe</label> */}
									<input  placeholder="•••••••••••"
											type="password"
											id="password"
											onChange={ (event) => handlePassword(event.target.value) }
											required >
									</input>

									{/* s'affiche uniquement dans le cas où la requête renvoie une erreur */}
									<p className={`${ styles.message__error }`} id='message__error'>
										Nous ne reconnaissons pas cette adresse mail ou ce mot de passe
									</p>
				
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
