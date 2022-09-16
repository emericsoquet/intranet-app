import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import * as Storage from '../services/Storage'

export function UsersRoute() {
    const token = Storage.getToken()
    if (token) {
        return <Outlet></Outlet>
    } else {
        return <Navigate to="/login"></Navigate>
    }     
}

export function AdminRoute() {
    const user      = Storage.getUser()
    const userAdmin = user.isAdmin

    if(userAdmin) {
        return <Outlet></Outlet>
    } else {
        return <Navigate to="/"></Navigate>
    }
}

/* export function SpecificUserRoute() {
    const user      = Storage.getUser()
    const userAdmin = user.isAdmin

    if(userAdmin) {
        return <Outlet></Outlet>
    } else {
        return <Navigate to="/"></Navigate>
    }
} */
