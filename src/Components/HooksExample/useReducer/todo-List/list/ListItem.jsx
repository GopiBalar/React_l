import React from "react";
import { ACTIONS } from "../TodoList";
import styles from "../../../../../styles/hooksExample/list.module.css";

function ListItem(props) {
  const { todo, dispatch } = props;
  const { id, task, isCompleted } = todo;

  function handleChange() {
    dispatch({ type: ACTIONS.UPDATE, payload: id });
  }

  function handleDelete() {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  }
  return (
    <div className={styles.listItemContainer}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
        className={styles.btnUpdate}
      />
      <p className={styles.listItemTask}>{task}</p>
      <button className={styles.btnEdit}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      <button onClick={handleDelete} className={styles.btnDelete}>
        <i className="fa-sharp fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default ListItem;
