import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPaperPlane, faCakeCandles } from '@fortawesome/free-solid-svg-icons'

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
        <article className={`${styles.card} col-12 col-md-5 col-xl-4`}>

            <div className={`${styles.wrapper}`}>
                <figure className={ data.gender == 'female' ? 'border-feminine' : 'border-masculine' }>
                    <img src={ data.photo } />
                </figure>

                <div className={`${styles.infos}`}>

                    <h3>{ data.firstname } { data.lastname }</h3>

                    <div className={`${styles.sector}`}>
                        <p>{ data.city }, { data.country }</p>
                        <p>{ data.service }</p>
                    </div>

                    <div className={`${styles.contact}`}>
                        <span><a href={`tel:${data.phone.split('-').join('')}`}><FontAwesomeIcon icon={faPhone} /></a></span>
                        <span><a href={`mailto:${data.email}`}><FontAwesomeIcon icon={faPaperPlane} /></a></span>
                        <div className={`${styles.tooltip}`}>
                            
                            <span><FontAwesomeIcon icon={faCakeCandles} /></span>
                            <div className={`${styles.birthday}`}>{ data.birthdate }</div>
                        </div>
                    </div>

                </div>

                { Storage.getUser().isAdmin &&
                    <div className={`${styles.buttons}`}>
                        <Link to={`/user/${ data.id }`} className={`${styles.button}`} >Modifier</Link>
                        <button onClick={ () => remove(data.id) } className={`${styles.button}`}>Supprimer</button>
                    </div>
                }
            </div>
        </article>
    )
}
