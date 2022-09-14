import React, { useState, useEffect } from 'react'
import * as Users from '../services/users.service'

import { getCoworkers } from '../services/users.service'
import Searchbar from '../components/Searchbar'

export default function Coworkers() {

    const [coworkers, setCoworkers] = useState()
    const [search, setSearch] = useState('') // string dans l'input
    const [searchType, setSearchType] = useState('') // select du type de la recherche
    const [category, setCategory] = useState('') // select du service

    const [firstCall, setFirstCall] = useState(true) // première fois qu'on arrive sur la page
    const [filtered, setFiltered] = useState([]) // tableau des pokémons recherchés

	useEffect( () => {
		getCoworkers().then(element => setCoworkers(element))
	}, [])
    

    useEffect( () => {

        // tableau vide quand on arrive sur la page, on vérifie si c'est la première fois qu'on arrive avec firstCall
        if(!firstCall) {

            const searchString = '/^' + search + '.*$/'

                if( searchType == 'name' ) {
                    setFiltered(coworkers?.filter( 
                        element => (
                            ( element.firstname.toLowerCase().match(searchString.toLowerCase()) 
                            || element.firstname.toLowerCase().match(search.toLowerCase()) )
                            && element.service.toLowerCase().match(category.toLowerCase())
                        ))
                    )
                } else if( searchType == 'city') {
                    setFiltered(coworkers?.filter( 
                        element => (
                            ( element.city.toLowerCase().match(searchString.toLowerCase()) 
                            || element.city.toLowerCase().match(search.toLowerCase()) )
                            && element.service.toLowerCase().match(category.toLowerCase())
                        ))
                    )
                }
            

        }  
        setFirstCall(false) // appelé une première fois, firstCall désactivé
    
      }, [search, searchType, category] /* chaque fois que le string dans l'input change */ )


    return (
        <section>

            <Searchbar setSearch={ setSearch } setSearchType={ setSearchType } setCategory={ setCategory } />

            { (search === '' && category === '') ? // si le champ texte est vide et pas de service sélectionné
                <>
                    { coworkers && coworkers?.map( (element, index) => {
                        return ( 
                            <article key={ index }>
                                <p>{ element.firstname } { element.lastname }</p>
                                <p>{ element.city }, { element.country }</p>
                                <p>{ element.service }</p>
                            </article>
                        )
                    }) }
                </>
                : 
                <>
                    { filtered && filtered?.map( (element, index) => {
                        return ( 
                            <article key={ index }>
                                <p>{ element.firstname } { element.lastname }</p>
                                <p>{ element.city }, { element.country }</p>
                                <p>{ element.service }</p>
                                <p>{ element.gender }</p>
                            </article>
                        )
                    }) }
                </>
            }
            {/* {
                coworkers && coworkers?.map( (element, index) => {
                    return ( 
                        <article key={ index }>
                            <p>{ element.firstname }</p>
                            <p>{ element.city }, { element.country }</p>
                            <p>{ element.service }</p>
                        </article>
                    )
                })
            } */}
        </section>
    )
}
