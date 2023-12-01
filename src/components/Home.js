import React from 'react'
import AddTodo from './AddTodo'
import { Todos } from './Todos'

export const Home = () => {
  return (
    <div>
        <header><h1 className="text-center font-bold text-2xl mt-3">CRUD APP with REDUX</h1></header>
        <AddTodo/>
        <Todos/>
    </div>
  )
}
