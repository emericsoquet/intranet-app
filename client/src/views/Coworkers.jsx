import React, { useState, useEffect } from 'react'
import * as Users from '../services/users.service'

import { getCoworkers } from '../services/users.service'
import Searchbar from '../components/Searchbar'
import Card from '../components/Card'

import styles from '../assets/styles/views/Coworkers.module.scss'

export default function Coworkers() {

    const [coworkers, setCoworkers] = useState()
    const [search, setSearch] = useState('') // string dans l'input
    const [searchType, setSearchType] = useState('') // select du type de la recherche
    const [category, setCategory] = useState('') // select du service

    const [firstCall, setFirstCall] = useState(true) // première fois qu'on arrive sur la page
    const [filtered, setFiltered] = useState([]) // tableau filtré

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
        <main className="main">
            <section className={`container ${styles.coworkers}`}>

                <div className="row">
                    <Searchbar setSearch={ setSearch } setSearchType={ setSearchType } setCategory={ setCategory } />
                </div>

                <div className="row">
                    <div className={`${ styles.wrapper } mx-auto row justify-content-between`}>
                    { (search === '' && category === '') ? // si le champ texte est vide et pas de service sélectionné
                        <>
                            { coworkers && coworkers?.map( (element, index) => {
                                return <Card key={ index } data={ element } />      
                            }) }
                        </>
                        : 
                        <>
                            { filtered && filtered?.map( (element, index) => {
                                return <Card key={ index } data={ element } />   
                            }) }
                        </>
                    }
                    </div>
                </div>
            </section>
        </main>
    )
}
