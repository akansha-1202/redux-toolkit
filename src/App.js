import React from "react";
import AddTodo from "./components/AddTodo";
import { Todos } from "./components/Todos";
function App() {
  return (
    <>
      <header><h1 className="text-center font-bold text-2xl mt-3">CRUD APP with REDUX</h1></header>
      <AddTodo/>
      <Todos/>
    </>
  );
}
export default App;
