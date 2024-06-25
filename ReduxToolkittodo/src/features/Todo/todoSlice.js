// Import the createSlice function from the Redux Toolkit.
// This function is used to create a slice of the Redux store.
import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        title:"Learn Redux",
    }] 
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
     reducers:{
        addTodo:(state, action )=>{
            const todo={ 
                id:nanoid(),
                title:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state , action )=>{
           state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        // updateTodo:(state, action)=>{
        //     const todo = state.todos.find((todo)=>todo.id === action.payload.id)
        //     todo.title = action.payload.title
        // }
        updateTodo:(state, action)=>{
            const todo = state.todos.find((todo)=>todo.id === action.payload.id)
            todo.title = action.payload.title
        },
     

     }
})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions
export default todoSlice.reducer