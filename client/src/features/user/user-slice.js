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
        userLogout: (state) => {
            state.userInfo = {}
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
        }
    }
})

export const { userLogin, userLogout } = userSlice.actions
export default userSlice.reducer