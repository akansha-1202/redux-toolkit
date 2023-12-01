import {createSlice} from "@reduxjs/toolkit";
const TodoSlice =  createSlice({
          name : "todos",
          initialState : {
          todos : [
              {id : 1, text : "Movie", completed : false},
              {id : 2, text : "Gym", completed : true},
              {id : 3, text : "Breakfast", completed : true},             
          ]
          },
          reducers : {
            addTodo : (state, action) => {
                console.log(action);
                // const todo = {
                //     id : nanoid(),
                //     text : action.payload,
                // }
                state.todos.push(action.payload)
            },
            removeTodo : (state, action) => {
                state.todos = state.todos.filter(todo => 
                    todo.id !== action.payload
                )
            },
            updateTodo : (state, action) => {
                const { id, newText } = action.payload;
                const todoToUpdate = state.todos.find((todo) => todo.id === id);
          
                if (todoToUpdate) {
                  todoToUpdate.text = newText;
                }            }
          }
 
})

export const {addTodo, removeTodo, updateTodo} = TodoSlice.actions;
export default TodoSlice.reducer;