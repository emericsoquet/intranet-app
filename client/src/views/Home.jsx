import React from 'react'
import { useDispatch } from 'react-redux'

import { getUser } from '../services/users.service'
import * as Storage from '../services/Storage'
/* import { userInfos } from '../features/user/user-slice' */

export default function Home() {


	return (
		<section>
			<p>Hello!</p>	
			<p>Connais-tu ?</p>
		</section>
	)
}
