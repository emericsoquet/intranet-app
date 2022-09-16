import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {}
    },
    reducers: {
        userLogin: (state, { payload }) => {
            state.userInfo = payload
        },
        update: (state, { payload }) => {
            state.userInfo = payload
        },
        userLogout: (state) => {
            state.userInfo = {}
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('firstname')
            localStorage.removeItem('photo')
            localStorage.removeItem('id')
        }

    }
})

export const { userLogin, userLogout, update } = userSlice.actions
export default userSlice.reducer