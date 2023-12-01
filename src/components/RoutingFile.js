import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import UpdateTodo from './UpdateTodo'
import { Home } from './Home'

const RoutingFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/edit/:id" element={<UpdateTodo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutingFile;
