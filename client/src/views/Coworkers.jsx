import React, { useState, useEffect } from 'react'

import { getCoworkers } from '../services/users.service'
import Searchbar from '../components/Searchbar'
import Card from '../components/Card'

import styles from '../assets/styles/views/Coworkers.module.scss'

export default function Coworkers() {

    const [coworkers, setCoworkers] = useState()
    const [search, setSearch] = useState('') // string dans l'input
    const [searchType, setSearchType] = useState('') // select du type de la recherche
    const [category, setCategory] = useState('') // select du service
    const [unset, setUnset] = useState(0)

    const [filtered, setFiltered] = useState([]) // tableau filtré

	useEffect( () => {
        getCoworkers().then(
                element => setCoworkers(element)
            ).catch(
                error => console.log(error.response)
            )
	}, [unset])
    

    useEffect( () => {
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
                                return <Card key={ index } data={ element } setUnset={ setUnset } unset={ unset } />      
                            }) }
                        </>
                        : 
                        <>
                            { filtered && filtered?.map( (element, index) => {
                                return <Card key={ index } data={ element } setUnset={ setUnset } unset={ unset } />   
                            }) }
                        </>
                    }
                    </div>
                </div>
            </section>
        </main>
    )
}
