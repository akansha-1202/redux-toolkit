import React from "react"
import {useSelector} from "react-redux";
export const Todos = () =>{
    const todos = useSelector(state => state.todoReducer.todos)
    console.log(todos);
    return(
        <>
           <ul className="list-none flex direction-column">
            {
                todos.map(item => (
                    <li key={item.id} className="w-2/3 flex justify-between px-4 py-2  bg-gray-400 my-4">
                        <div>{item.text}</div>
                        {/* <div>{item.completed}</div> */}
                        <button className="border rounded px-2 py-0.5 bg-gray-400 hover:bg-gray-500">Delete</button>                
                    </li>
                ))
            }
            </ul>
        </>
    )
}