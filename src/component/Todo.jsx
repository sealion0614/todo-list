
import { useState } from 'react';
function Todo(props) {
const [count, setCount] = useState(0);
  function add(){
      setCount(count+1);  
    }
    function sub(){
      setCount(count-1);  
    }
    function zero(){
      setCount(0);  
    }
    function deletes(){
    setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div className="card">
      <h2 className="title">
        {props.title}
      </h2>
      <div className="actions">

        <button onClick={sub}>-1</button>
        <button onClick={zero}>0</button>
        <button onClick={add}>+1</button>
        <button onClick={()=>props.onDelete(props.id)}>delete</button>
      </div>
      <p>{count}</p>
    </div>
  );
}

export default Todo;