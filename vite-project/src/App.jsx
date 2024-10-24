import { useState } from "react";
import "./App.css";
import InputContainer from "./assets/InputContainer";
import Mytodo from "./assets/Mytodo";

function App() {
  const [inputVal, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  function writeTodo(e){
    setInput(e.target.value)

  }
  function addTodo(){
    if(inputVal!==''){
      setTodo((prevTodo)=>[...prevTodo,inputVal]);
      setInput('');
    } 
  }
  function delTodo(todoindex){
    setTodo((prevTodo)=>
      prevTodo.filter((prevTodo,prevTodoIndex)=>{
        return prevTodoIndex!=todoindex

      })
    )

  }

  return (
    <>
      <main>
        {/* Heading of the class */}
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputContainer inputVal={inputVal} writeTodo = {writeTodo} addTodo = {addTodo} />
        <Mytodo todos = {todos} delTodo={delTodo}/>
      </main>
    </>
  );
}

export default App;
