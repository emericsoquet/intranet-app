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

export function SpecificUsersRoute() {
    const user      = Storage.getUser()
    const userAdmin = user.isAdmin
    const userId    = user.id
}
