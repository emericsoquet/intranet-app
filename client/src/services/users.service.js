import instance from './instance.service'

export async function getRandom() {
    const { data } = await instance.get('/collaborateurs/random')
    return data
}

export async function getCoworkers() {
    const { data } = await instance.get('/collaborateurs')
    return data
}

export async function getUser(id) {
    const { data } = await instance.get(`/collaborateurs/${id}`)
    return data
}