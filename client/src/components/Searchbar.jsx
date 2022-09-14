// dependencies
import React, { useRef } from 'react'

// setSearch en props pour donner le résultat de la recherche à la view Listing.jsx
const Searchbar = ({ setSearch }) => {

    // useRef pour cibler l'input
    const inputValue = useRef()

    // fonction qui empêche l'envoi de données du forum + prend la valeur dans l'input
    const handleSearch = event => {
        event.preventDefault()
        setSearch(inputValue.current.value)
    }
    

    return (
        // à chaque changement de la valeur de l'input, handleSearch la garde en mémoire et la donne à Listing.jsx
        <form role="search" className="col-10 mx-auto" onChange={ handleSearch }>
            <label htmlFor="search-coworker">Chercher parmi les collaborateurs</label>
            <div className="input-group">
                <input type="text" className="form-control" id="search-coworker" ref={inputValue} />
            </div>
            
        </form>
    )
}

export default Searchbar
