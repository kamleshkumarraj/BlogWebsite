import { createSlice } from "@reduxjs/toolkit";

const slice  = createSlice({
    name : "self",
    initialState : {user : {}},
    reducers : {
        setUser : (state , action) => {
            state.user = action.payload;
        },
        resetUser : (state, action) => {
            state.user = undefined
        }

    }
})

export const selfHandler = slice.reducer
export const {setUser , resetUser} = slice.actions
export const getSelf = (state) => state.self.user;