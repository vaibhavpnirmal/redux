import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0,
}

export const counterslice1=createSlice({
    name:"counter1",
    initialState,
    reducers:{
        increment:(state)=>{state.value=state.value+1},
        decrement:(state)=>{state.value=state.value-1}

    }

})

export const{increment,decrement}=counterslice1.actions
export default counterslice1.reducer