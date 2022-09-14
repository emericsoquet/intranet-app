import instance from './instance.service'

export async function authentification( email, password ) {
    const { data } = await instance.post('/login', {
        email: email, 
        password: password
    })
    console.log(data)
    return data
}
