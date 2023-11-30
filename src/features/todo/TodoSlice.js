import {createSlice, nanoid} from "@reduxjs/toolkit";
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
                const todo = {
                    id : nanoid(),
                    text : action.payload,
                }
                state.todos.push(todo)
            },
            removeTodo : (state, action) => {
                state.todos = state.todos.filter(todo => 
                    todo.id !== action.payload
                )
            },
            updateTodo : (state, action) => {
                const {id, text} = action.payload;
                const found = state.find(item => item.id == id);
                if(found){
                    found.text = text;
                }
            }
          }
 
})

export const {addTodo, removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;