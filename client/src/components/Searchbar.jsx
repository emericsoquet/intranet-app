// dependencies
import React, { useRef } from 'react'

import styles from '../assets/styles/components/Searchbar.module.scss'

// setSearch en props pour donner le résultat de la recherche à la view Listing.jsx
const Searchbar = ({ setSearch, setSearchType, setCategory }) => {

    // useRef pour cibler l'input
    const inputValue = useRef()
    const typeValue = useRef()
    const categoryValue = useRef()

    // fonction qui empêche l'envoi de données du forum + prend la valeur dans l'input
    const handleSearch = event => {
        event.preventDefault()
        setSearch(inputValue.current.value)
        setSearchType(typeValue.current.value)
        setCategory(categoryValue.current.value)
    }


    return (
        // à chaque changement de la valeur de l'input, handleSearch la garde en mémoire et la donne à Listing.jsx
        <form role="search" onChange={ handleSearch } className={`col-12 ${ styles.form }`}>
            <label htmlFor="search-coworker">Découvrir l'équipe</label>
            <div className="input-group">
                <input type="text" className="form-control" id="search-coworker" ref={inputValue} />
            </div>
            <fieldset className="d-flex justify-content-between flex-wrap">
                <div className={`input-group ${ styles.groupSelect }`}>
                    <select className="form-select" aria-label="Default select example" ref={typeValue}>
                        <option value="name">Nom</option>
                        <option value="city">Ville</option>
                    </select>
                </div>
                <div className={`input-group ${ styles.groupSelect }`}>
                    <select className="form-select" aria-label="Default select example" ref={categoryValue}>
                        <option value="">-- Choisir un service --</option>
                        <option value="marketing">Marketing</option>
                        <option value="technique">Technique</option>
                        <option value="client">Client</option>
                    </select>
                </div>
            </fieldset>
        </form>
    )
}

export default Searchbar
