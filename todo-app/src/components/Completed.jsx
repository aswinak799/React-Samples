import React from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { TiDelete } from "react-icons/ti";

const Completed = (props) => {
  return (
    <div className="todo-app">
      <h1>Completed Task</h1>
      {props.toDos.map((item, index) => {
        if (!item.completed) return null;
        if (item.deleted) return null;
        return (
          <div key={index} className={"todo-row"}>
            <div onClick={() => props.toggleCheckBox(item.id)}>
              {item.completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            </div>
            <div>
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

export default Completed;
