import React from "react";
import Todo from "./Todo";
function Mytodo({ todos=[], delTodo }) {
  console.log(todos)
  return (
    <>
      {/* Display all the todo's */}
      <div className="my-todo">
        {todos.map((todo, index) => {
          return <Todo todo={todo} key={index} index={index} delTodo={delTodo} />;
        })}
      </div>
    </>
  );
}

export default Mytodo;
