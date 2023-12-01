import React from "react"
import {useSelector, useDispatch} from "react-redux";
import {removeTodo} from "../features/todo/TodoSlice"
import { Link } from 'react-router-dom';

export const Todos = () =>{
    const todos = useSelector(state => state.todoReducer.todos);
    const dispatch = useDispatch();
    console.log(todos);
    return(
        <div className="w-full">
           <ul className="mx-auto w-2/3">
            {
                todos.map((item,index) => (
                    <li key={item.id} className="w-full flex justify-between border-b-2 border-black px-4 py-2 my-4">                    
                        <div>{index + 1}. {item.text}</div>
                        <div>
                            <Link to={`/edit/${item.id}`}>
                                <button 
                                    className="border rounded px-4 py-0.5 bg-blue-400 hover:bg-blue-900" 
                                >Edit</button>
                            </Link>
 
                           <button 
                                className="border rounded px-2 py-0.5 bg-red-600 hover:bg-gray-500" 
                                onClick={()=> dispatch(removeTodo(item.id))}
                            >Delete</button>  
                        </div>              
                    </li>
                ))
            }
            </ul>
        </div>
    )
}