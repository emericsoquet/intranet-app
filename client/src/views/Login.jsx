import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'

import { authentification } from '../services/auth.service'
import { userLogin } from '../features/user/user-slice'
import * as Storage from '../services/Storage'

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
					<main className="login">
						<h2>Se connecter</h2>
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
					</main>
			}
		</>
	)

}

export default Login
