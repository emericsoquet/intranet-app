import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import * as Storage from '../services/Storage'
import { removeUser } from '../services/manage.service'

import styles from '../assets/styles/components/Card.module.scss'


export default function Card( { data, unset, setUnset } ) {

    const remove = (id) => {
        Swal.fire({
            title: 'Suppression',
            text: `Êtes-vous sûr(e) de vouloir supprimer ${data.firstname} ${data.lastname} de l'Intranet ?`,
            icon: 'error',
            confirmButtonText: 'Oui',
            confirmButtonColor: '#f33930',
            showCancelButton: 'true',
            cancelButtonText: 'Non',
            cancelButtonColor: '#ccc'
          }).then( result => {
            if (result['isConfirmed']) {
                removeUser(id).then(
                    setUnset(unset + 1)
                ).catch( error => 
                    console.log(error.response) 
                )
            } else { return }
          })

    }
    
    return (
        <article className={`${styles.card} col-12 col-sm-5`}>

            <div className={`${styles.wrapper}`}>
                <figure>
                    <img src={ data.photo } />
                </figure>

                <div className={`${styles.infos}`}>
                    <h3>{ data.firstname } { data.lastname }</h3>
                    <p>{ data.city }, { data.country }</p>
                    <p>{ data.service }</p>
                    <p>{ data.phone }</p>
                    <p>{ data.birthdate }</p>
                

                    { Storage.getUser().isAdmin &&
                        <>
                            <button onClick={ () => remove(data.id) }>Supprimer</button>
                            <Link to={`/user/${ data.id }`} >Modifier</Link>
                        </>
                    }
                </div>
            </div>
        </article>
    )
}
