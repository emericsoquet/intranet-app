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
import ModifyUser from './views/ModifyUser'
import AddUser from './views/AddUser'
import Error from './views/Error'

import { UsersRoute, AdminRoute } from './utils/PrivateRoutes'

function App() {

	const navigate = useNavigate() 
	const dispatch = useDispatch()

	return (
		<div className="App">
			<Navbar />
			<Routes>

				<Route path="/login" element={ <Login /> } />
				<Route path="*" element={ <Error /> }></Route>

				<Route element={ <UsersRoute /> }>

					<Route path="/" element={ <Home /> } exact />
					<Route path="/coworkers" element={ <Coworkers /> } exact />
					
					{ Storage.getUser() && 
						<Route path={`/user/${Storage.getUser().id}`} element={ <Profile /> } />
					}

					<Route element={ <AdminRoute /> }>
						<Route path="/addUser" element={ <AddUser /> } />
						<Route path="/user/:id" element={ <ModifyUser /> } />
					</Route>

					{/* <Route element={ <SpecificUsersRoute id={ Storage.getItem('id') } /> }>
						
					</Route> */}
				</Route>
				
			</Routes>
		</div>
	)
}

export default App

