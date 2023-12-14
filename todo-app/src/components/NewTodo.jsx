import React from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { TiDelete } from "react-icons/ti";

const NewTodo = (props) => {
  return (
    <div className="todo-app">
      <h1>What's the Plan for Today?</h1>
      <div className="todo-form">
        <input
          value={props.toDo}
          placeholder="Add a todo"
          name="text"
          className="todo-input"
          onChange={(ev) => props.setTodo(ev.target.value)}
        />
        <button className="todo-button" onClick={props.addTodo}>
          Add Task
        </button>
      </div>
      {props.toDos.map((item, index) => {
        if (item.completed) return null;
        if (item.deleted) return null;
        return (
          <div key={index} className={"todo-row"}>
            <div onClick={() => props.toggleCheckBox(item.id)}>
              {item.completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            </div>
            <div className="title">
              <h3 contenteditable="true" onBlur={(e)=>props.editTask(item.id,e.target.innerText)}>{item.name}</h3>
            </div>
            <div className="icons">
              <TiDelete size={30} onClick={() => props.toggleDelete(item.id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewTodo;
