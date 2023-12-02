import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../features/todo/TodoSlice";
import { useNavigate, useParams } from 'react-router-dom';


const UpdateTodo = () => {
    const {id} = useParams();
    const todos = useSelector(state => state.todoReducer.todos);
    const existingTask = todos.filter(f => f.id == id);
    const {text} = existingTask[0];
    const [input, setInput] = useState(text);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const updateToHandler = (e) =>{
        e.preventDefault();
        dispatch(updateTodo({id:id, text:input}));
        console.log(id,input);

        navigate('/');
    }
  return (
    <div className='bg-gray-200 h-screen flex items-center'>
      <form onSubmit={updateToHandler} className="w-full flex justify-center gap-x-5 py-6">
              <input type ="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder = "Enter a Todo...." className = "bg-gray-800 w-2/4 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 pl-2 leading-8 transition-colors duration-200 ease-in-out"/>
                  <button type="submit" className="text-white bg-indigo-400 hover:bg-indigo-500 border-0 rounded py-1 px-5 focus:outline-none">
                    UPDATE</button>
      </form>
    </div>
  )
}

export default UpdateTodo
