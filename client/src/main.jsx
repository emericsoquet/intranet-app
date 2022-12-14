import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'sweetalert2/src/sweetalert2.scss'
import './assets/styles/style.scss'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={ store }>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
)
