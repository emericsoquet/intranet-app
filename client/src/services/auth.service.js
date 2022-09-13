import instance from './instance.service'

export async function authentification( email, password ) {
    const { data } = await instance.post('/login', {
        email: email, 
        password: password
    })
    console.log(data)
    return data
}

/* const userLogin = () => createAsyncThunk(
    '/login',
    async ( { email, password }, { rejectWithValue } ) => {
      
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                '/login',
                { email, password },
                config
            )

            console.log(data)
            localStorage.setItem('token', data.token)
            return data

        } catch (error) {

            if (error.response.data) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
            
        }
}) */

/* export default userLogin */