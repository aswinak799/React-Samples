import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import Completed from './components/Completed';
import Removed from './components/Removed';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {
  const [toDo, setTodo] = useState();
  const [toDos, setTodos] = useState(JSON.parse(localStorage.getItem('todos'))||[]);
  const MySwal = withReactContent(Swal);

  const addTodo = ()=>{
    if(toDo.length===0) return;
    let newTodos = [
      { id: Date.now(), name: toDo, completed: false, deleted: false },
      ...toDos
    ]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodo('')
  }
  const toggleCheckBox = (id)=>{
    let newTodos = toDos.filter((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    })
    setTodos([...newTodos])
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const toggleDelete = (id)=>{
    let newTodos = toDos.filter((todo)=>{
      if(todo.id === id){
        todo.deleted = !todo.deleted;
      }
      return todo
    })
    setTodos([...newTodos])
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }
  const editTask = (id,name)=>{
    let newTodos = toDos.filter((todo)=>{
      if (todo.id === id) todo.name = name;
      return todo;
    })
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }


  return (
    <>
    <div className="heading">
      <h1>Todo App</h1>
    </div>
    <div className="row">
      <NewTodo 
      addTodo={addTodo}
      toDo={toDo}
      setTodo={setTodo}
      toDos={toDos}
      toggleCheckBox={toggleCheckBox}
      toggleDelete={toggleDelete}
      editTask={editTask}

      />
      <Completed 
      toDos={toDos}
      toggleCheckBox={toggleCheckBox}
      editTask={editTask}
      toggleDelete={toggleDelete}
      />
      <Removed
      toDos={toDos}
      toggleCheckBox={toggleCheckBox}
      editTask={editTask}
      toggleDelete={toggleDelete}
      />
    </div>
    
    </>
  );
}

export default App
