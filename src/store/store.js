import {configureStore} from '@reduxjs/toolkit'
import { selfHandler } from './slices/selfHandler.slice.js'
import { apiHandlingReducers } from './slices/apiResonseHandler.slice.js'

export const store = configureStore({
    reducer : {
        self : selfHandler,
        apiResponse : apiHandlingReducers
    }
})