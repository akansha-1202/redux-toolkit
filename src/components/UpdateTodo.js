import React from 'react'
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/TodoSlice";


const UpdateTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addToHandler = (e) =>{
        e.preventDefault();
        dispatch(updateTodo(input));
        setInput('');
    }
  return (
    <form onSubmit={addToHandler} className="w-full flex justify-center gap-x-5 py-6">
             <input type ="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder = "Enter a Todo...." className = "bg-gray-800 w-2/4 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 pl-2 leading-8 transition-colors duration-200 ease-in-out"/>

             <button type="submit" className="text-white bg-indigo-400 hover:bg-indigo-500 border-0 rounded py-1 px-5 focus:outline-none">EDIT</button>
    </form>
  )
}

export default UpdateTodo
