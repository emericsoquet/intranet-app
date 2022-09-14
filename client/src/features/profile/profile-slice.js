import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {}
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        userInfo: {}
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.userInfo = payload
        }
    }
})

export const { setUser } = profileSlice.actions
export default profileSlice.reducer