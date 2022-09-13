import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Coworkers from './components/Coworkers'

function App() {

	const navigate = useNavigate() 

	/* useEffect(() => {
		if (window.localStorage.getItem('token')) {
			navigate('/')
		}
	}, [navigate]) */

	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={ <Login /> } />
				<Route path="/" element={ <Home /> } />
				<Route path="/coworkers" element={ <Coworkers /> } />
			</Routes>
		</div>
	)
}

export default App
