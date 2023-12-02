import React from "react"
import {useSelector, useDispatch} from "react-redux";
import {removeTodo, toggleComplete} from "../features/todo/TodoSlice"
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
                        <div className="w-4/5 flex">
                            <span>{index + 1}.</span>
                            <div style={{ textDecoration : item.completed ? 'line-through red' : 'none' }}>
                                {item.text}
                            </div>
                        </div>
                        <div className="w-1/5 flex justify-between items-center">
                            {
                                item.completed ? 
                                    <i class="fa-solid fa-x" style={{color: '#e22222', fontSize : '16px'}} onClick={() => dispatch(toggleComplete({ id: item.id }))}></i> 
                                        :
                                    <i class="fa-solid fa-check" style={{color: '#118eee', fontSize : '18px'}} onClick={() => dispatch(toggleComplete({ id: item.id }))}></i>
                            }
                                
                            <Link to={`/edit/${item.id}`}>
                                <i class="fa-solid fa-pen-to-square" style={{fontSize : '16px'}}></i>
                            </Link>
 
                            <i class="fa-solid fa-trash-can"
                               style={{fontSize : '16px'}}
                               onClick={()=> dispatch(removeTodo(item.id))}                         
                            ></i>  
                        </div>              
                    </li>
                ))
            }
            </ul>
        </div>
    )
}