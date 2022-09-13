import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, {payload})=> {
            state.user = payload;
        },
    }
})

export const { userLogin } = userSlice.actions
export default userSlice.reducer