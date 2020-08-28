import React from "react";
import { IPlan } from "../interfaces";

interface TodoList {
  plan: IPlan;
  onUpdateTodos(plan: IPlan): void;
}

export const TodoList: React.FC<TodoList> = ({ plan, onUpdateTodos }) => {
  if (plan.todos.length === 0) {
    return <p className="center">No todos yet</p>;
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();

    plan.todos = plan.todos.filter((todo) => todo.id !== id);

    onUpdateTodos(plan);
  };

  const toggleHandler = (id: number) => {
    plan.todos = plan.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    onUpdateTodos(plan);
  };

  return (
    <ul>
      {plan.todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onClick={(e) => toggleHandler(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => removeHandler(e, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
