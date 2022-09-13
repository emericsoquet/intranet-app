import instance from './instance.service'

export async function getCoworkers() {
    const { data } = await instance.get('/collaborateurs')
    console.log(data)
    return data
}