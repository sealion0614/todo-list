	
import { useState, useEffect } from 'react';
import Todo from './component/Todo';
import "./App.css";
 
 
function App() {
  const [todos, setTodos] = useState([
  ]);
 
  useEffect (() => {
      let list = []
      for (let i = 1 ; i <= 10 ; i++) {
          list.push({id : i, title : "No" + i.toString()})
      }
      setTodos(list)
  }, [])
  const deletePrepair=(id)=>{
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <h1>My Todos</h1>
      {todos.map((todo) => (
        <Todo 
          key={todo.id}
          id={todo.id}
          title={todo.title}
          onDelete={deletePrepair} 
        />
      ))}
    </div>
  );
}
 
export default App;