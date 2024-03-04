import React, { useReducer } from "react";
import TodoNav from "./TodoNav";
import AddTask from "./addTask.jsx/AddTask";
import List from "./list/List";
import styles from "../../../../styles/hooksExample/todoList.module.css";

export const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const initialState = [
  {
    id: Date.now(),
    task: "Do Something",
    isCompleted: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];

    case ACTIONS.UPDATE:
      return state.map(function (value) {
        if (value.id === action.payload) {
          return { ...value, isCompleted: !value.isCompleted };
        }
        return value;
      });

    case ACTIONS.DELETE:
      return state.filter(function (value) {
        if (value.id === action.payload) {
          return false;
        }
        return true;
      });

    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.todoListContainer}>
      <TodoNav />
      <AddTask dispatch={dispatch} />
      <List todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default TodoList;
// Chai aur Code
