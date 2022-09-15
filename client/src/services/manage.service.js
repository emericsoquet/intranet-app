import instance from './instance.service'

export async function updateUser(id, updatedProfile) {
    const { data } = await instance.put(`/collaborateurs/${id}`, updatedProfile)
    return data
}

export async function addUser(newInfos) {
    const { data } = await instance.post(`/collaborateurs`, newInfos)
    console.log(data)
    return data
}