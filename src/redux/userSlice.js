import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({   
    name: 'user',
    initialState: {
        userInfo: {
            name: "Alva",
            email: "alva@example.com",
        },
        pending: null,
        error: null,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.user = action.payload;
            state.pending = false;
            state.error = null;
        },
        updateError: (state, action) => {
            state.error = action.payload;
            state.pending = false;
        }
    }
});


export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
  
 