import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { authentification } from '../services/auth.service'
import { userLogin } from '../features/user/user-slice'

const Login = () => {

  	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	const handleSubmit = (event) => {
		event.preventDefault()
		authentification(email, password)
			.then( (data) => {
				console.log(data)
				dispatch( userLogin(data) )
				localStorage.setItem( 'token', data.token )
				navigate('/home')
			})
	}


	return (
		<>
			<section>
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
			</section>
		</>
	)

}

export default Login
