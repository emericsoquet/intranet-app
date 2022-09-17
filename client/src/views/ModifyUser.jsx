import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import { getUser } from '../services/users.service'
import { updateUser } from '../services/manage.service'
import Form from '../components/Form'

import * as Storage from '../services/Storage'

export default function Profile() {

    const[profile, setProfile] = useState()

    // récupération de l'id dans l'url après "user/"
    const params = useParams()

    useEffect( () => {
		getUser(params.id).then(element => setProfile(element))
	}, [params.id])

    const updateProfile = (event) => {
        event.preventDefault()

        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false
        })

        updateUser(params.id, profile).then(
            console.log('SUCCESS!'),
            console.log(profile),
            Toast.fire({
                title: `Le profil a bien été modifié`,
                icon: 'success',
            })
        ).catch( error => 
            console.log(error.response) 
        )
	}

    return (

        profile && 
            <section className='main'>
                <form onSubmit={ updateProfile }>
                    <Form setProfile={ setProfile } profile={ profile } />
                </form>
            </section>
    )
}
