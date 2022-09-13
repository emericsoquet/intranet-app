import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { getUser } from './services/users.service'
import * as Storage from './services/Storage'

import Navbar from './components/Navbar'
import Login from './views/Login'
import Home from './views/Home'
import Coworkers from './views/Coworkers'

function App() {

	const navigate = useNavigate() 
	const dispatch = useDispatch()

	const user = useSelector((state) => state.user);
	console.log(user)
	

	/* if( Storage.getToken() ) {
		const id = Storage.getUserId()
		console.log(id)
		const currentUser = getUser(id).then( (data) => {
				console.log(data.firstname)
			}
		)
	} */


	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/login" element={ <Login /> } />
				<Route path="/" element={ <Home /> } />
				<Route path="/coworkers" element={ <Coworkers /> } />
			</Routes>
		</div>
	)
}

export default App
