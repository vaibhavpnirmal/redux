import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({

    name:"vaibhav",
    initialState:[],
    reducers:{

        addtodo:(state,action)=>{
           const newtodo={
            id:Date.now(),
            text:action.payload,
            completed:false
           }

           state.push(newtodo)
        },

        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
          },
    }
})

export const {addtodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer