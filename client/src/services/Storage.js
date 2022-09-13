export const setToken = (data) => {
    localStorage.setItem('token', data)
}
export const getToken = () => {
    return window.localStorage.getItem('token');
}
export const setUser = (data) => {
    localStorage.setItem('user', data)
}
export const getUser = () => {
    return window.localStorage.getItem('user');
}