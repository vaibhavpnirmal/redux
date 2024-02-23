import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../slices/Counterslice'

export const store=configureStore({

    reducer:{
        counter:counterReducer,
    },
})