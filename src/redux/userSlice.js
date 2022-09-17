import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({   
    name: 'counter',
    initialState: {
        name: "Alva",
        email: "alva@example.com",
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
})

export const { update } = userSlice.actions;
export default userSlice.reducer;
  
 