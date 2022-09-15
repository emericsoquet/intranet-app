import React from 'react'
import * as Storage from '../services/Storage'
import styles from '../assets/styles/components/Card.module.scss'
import { Link } from 'react-router-dom'

export default function Card( { data } ) {
    console.log(data)
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
                            <button>Supprimer</button>
                            <Link to={`/user/${ data.id }`} >Modifier</Link>
                        </>
                    }
                </div>
            </div>
        </article>
    )
}
