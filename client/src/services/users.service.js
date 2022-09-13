import instance from './instance.service'

export async function getRandom() {
    const { data } = await instance.get('/collaborateurs/random')
    console.log(data)
    return data
}

export async function getCoworkers() {
    const { data } = await instance.get('/collaborateurs')
    console.log(data)
    return data
}