import React from "react";
function Todo({todo, index,delTodo}) {
  return (
    <>
    <div className="box">
      <div>
        <p>{todo}</p>
      </div>
      <div className="box-action">
        <input type="checkbox" />
        <button onClick={()=>delTodo(index)}>Delete</button>
      </div>
      </div>
    </>
  );
}

export default Todo;
