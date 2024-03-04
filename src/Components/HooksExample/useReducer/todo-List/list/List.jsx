import React from "react";
import ListItem from "./ListItem";
import styles from "../../../../../styles/hooksExample/list.module.css";

function List(props) {
  const { todos, dispatch } = props;
  return (
    <div className={styles.listContainer}>
      {todos.map(function (todo, index) {
        return <ListItem key={index} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default List;
