import { useState } from 'react'

import './App.css'
import Todos from './Todos';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function App() {
  const [todoName, setTodoName]= useState();
  const dispatch = useDispatch()

 
  const handleSubmit=(e)=>{
    e.preventDefault();
   
    const newTodo = {name: todoName}
    

    dispatch(addTodo(newTodo));

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
            <h2> To do List </h2>
            <input type='text' placeholder='to do task' onChange={e=>setTodoName(e.target.value)} />
            <button>Add Task</button>
            
        </form>
        <Todos  />
        </div>
       
    </>
  )
}

export default App
