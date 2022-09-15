import instance from './instance.service'

export async function updateUser(id, updatedProfile) {
    const { data } = await instance.put(`/collaborateurs/${id}`, updatedProfile)
    return data
}

export async function addUser(newInfos) {
    const { data } = await instance.post(`/collaborateurs`, newInfos)
    return data
}

export async function removeUser(id) {
    const { data } = await instance.delete(`/collaborateurs/${id}`)
    return data
}