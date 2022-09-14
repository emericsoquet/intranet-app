import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/user-slice';
import profileReducer from '../features/profile/profile-slice'

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer
    }
});

export default store