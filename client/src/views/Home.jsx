import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getRandom } from '../services/users.service'

export default function Home() {

	const [coworker, setCoworker] = useState()

	useEffect( () => {
		getRandom().then(element => setCoworker(element))
	}, [])

	const randomUser = async () => {
		const response = await getRandom().catch( (error) => {
			console.log(error)
		})
		return response
	}

	const newRandomUser = () => {
		getRandom().then(coworker => setCoworker(coworker))
	}
	console.log(coworker)

	return (
		<main className={`main`}>
			{ coworker && 
				<>
					<h2>Connaissez-vous { coworker.firstname } ?</h2>
					<button onClick={newRandomUser}>Charger</button>
				</>
			}
		</main>
	)
}
