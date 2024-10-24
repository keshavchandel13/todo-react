import React from 'react'
function InputContainer({inputVal,writeTodo,addTodo}){
    return(
        <>
     {/* Input for the todo */}
     <div className="input-box">
       <div>
         <input onChange={writeTodo} type="text" placeholder="Enter TODO" value={inputVal}/>
       </div>
       <div>
         <button onClick={addTodo}>+</button>
       </div>
     </div>
     </>
    )

}

export default InputContainer