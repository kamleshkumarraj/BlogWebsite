import { createSlice } from "@reduxjs/toolkit";

const slice  = createSlice({
    name : 'apiResponse',
    initialState : {
        apiStatus : false,
        apiResponse : {}
    },
    reducers : {
        setApiStatus : (state , action ) => {
            state.apiStatus = true
        },
        resetApiStatus : (state , action) => {
            state.apiStatus = false
        },
        setApiResponse : (state , action) =>{
            state.apiResponse = action.payload
        },
        resetApiResponse : (state , action) => {
            state.apiResponse = undefined
        }
    }
})

export const apiHandlingReducers = slice.reducer
export const {resetApiResponse , setApiResponse , setApiStatus , resetApiStatus}  = slice.actions
export const getApiResponse = (state) => state.apiResponse