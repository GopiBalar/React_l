import React, { useState } from "react";
import { ACTIONS } from "../TodoList";
import styles from "../../../../../styles/hooksExample/addTask.module.css";

function AddTask(props) {
  const { dispatch } = props;
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    dispatch({
      type: ACTIONS.ADD,
      payload: { id: Date.now(), task, isCompleted: false },
    });
    setTask("");
    // ye setTask handleChange se value pass hone ke bad input blank krne ke liye hai our input me value={task} bhi
  }
  return (
    <div className={styles.addTaskContainer}>
      <input type="text" onChange={handleChange} value={task} />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
}

export default AddTask;
