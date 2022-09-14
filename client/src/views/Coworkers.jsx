import React, { useState, useEffect } from 'react'
import * as Users from '../services/users.service'

import { getCoworkers } from '../services/users.service'
import Searchbar from '../components/Searchbar'

export default function Coworkers() {

    const [coworkers, setCoworkers] = useState()

	useEffect( () => {
		getCoworkers().then(element => setCoworkers(element))
	}, [])

	const randomUser = async () => {
		const response = await getCoworkers().catch( (error) => {
			console.log(error)
		})
		return response
	}

    console.log(coworkers)

    return (
        <section>

            <Searchbar />

            { coworkers && 
                <>
                    { coworkers?.map( (element, index) => {
                        return ( 
                            <article key={ index }>
                                <p>{ element.firstname }</p>
                                <p>{ element.city }, { element.country }</p>
                                <p>{ element.service }</p>
                            </article>
                        )
                    }) }
                </>
            }
        </section>
    )
}
