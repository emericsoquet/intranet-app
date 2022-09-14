import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Router, useNavigate } from 'react-router-dom'

import { getUser } from './services/users.service'
import * as Storage from './services/Storage'

import Navbar from './components/Navbar'
import Login from './views/Login'
import Home from './views/Home'
import Coworkers from './views/Coworkers'
import Profile from './views/Profile'
import Error from './views/Error'

import { UsersRoute } from './utils/PrivateRoutes'

function App() {

	const navigate = useNavigate() 
	const dispatch = useDispatch()

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/login" element={ <Login /> } />
				<Route path="/user/:id" element={ <Profile /> } />
				<Route path="*" element={ <Error /> }></Route>
				<Route element={ <UsersRoute /> }>
					<Route path="/" element={ <Home /> } exact />
					<Route path="/coworkers" element={ <Coworkers /> } exact />
				</Route>
			</Routes>
		</div>
	)
}

export default App

