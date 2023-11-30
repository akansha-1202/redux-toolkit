import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import UpdateTodo from './UpdateTodo'

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit/:id" element={<UpdateTodo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routes
