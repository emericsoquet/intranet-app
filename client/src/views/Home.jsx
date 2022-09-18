// dépendances
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// outils, features & services
import { getRandom } from '../services/users.service'
import { ConvertDate } from '../utils/Convert'

// feuilles de style
import styles from '../assets/styles/views/Home.module.scss'

export default function Home() {

	const [coworker, setCoworker] = useState()

	useEffect( () => {
		getRandom().then(element => setCoworker(element))
	}, [])

	// méthode permettant de charger un nouvel utilisateur
	const newRandomUser = () => {
		getRandom()
			.then( coworker => setCoworker(coworker) )
			.catch( error => console.log(error.response) )
	}

	return (
		<main className={`main ${ styles.container }`}>
			{ coworker && 
				<>

					<h2>Dîtes bonjour à <span>{ coworker.firstname }</span></h2>

					<article className={ styles.card }>
						
							<figure className={ coworker.gender == 'female' ? 'border-feminine' : 'border-masculine' }>
								<img src={ coworker.photo } alt={`Photo de ${ coworker.firstname } ${ coworker.lastname }`} />
							</figure>

							<section className={ styles.infos }>
								<h3>{ coworker.firstname } { coworker.lastname }</h3>

								<p>{ ConvertDate(coworker.birthdate) }</p>
								<p>{ coworker.city }, { coworker.country }</p>
								<p>{ coworker.service }</p>
								
							</section>
						
							<section className={ styles.buttons }>
								<a href={`tel:${coworker.phone.split('-').join('')}`} className={`${styles.tooltip}`}>
									<FontAwesomeIcon icon={faPhone} />
                            		<div className={`${styles.tooltip__text}`}>{coworker.phone.split('-').join(' ')}</div>
								</a>
								<a href={`mailto:${coworker.email}`} className={`${styles.tooltip}`}>
									<FontAwesomeIcon icon={faPaperPlane} />
                            		<div className={`${styles.tooltip__text}`}>{ coworker.email }</div>
								</a>
							</section>
					</article>

					<button onClick={newRandomUser}>Je l'ai déjà vu</button>
				</>
			}
		</main>
	)
}
