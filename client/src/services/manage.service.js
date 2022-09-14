import instance from './instance.service'

export async function updateUser(id, updatedProfile) {
    const { data } = await instance.put(`/collaborateurs/${id}`, updatedProfile)
    console.log(data)
    return data
}