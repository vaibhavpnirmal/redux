import { configureStore } from "@reduxjs/toolkit";
import counterreducer from '../slices/counterSlice1'
import todoReducer from '../slices/todoSlice'

export const store1=configureStore({
    reducer:{
        counter1:counterreducer,
        todo1:todoReducer
        
    },
})