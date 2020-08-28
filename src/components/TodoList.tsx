import React from "react";
import { ITodo, IPlan } from "../interfaces";

interface TodoList {
  // todos: ITodo[];
  // id: number;
  plan: IPlan;
  onToggleTodo(id: number): void;
  onRemoveTodo(plan: IPlan): void;
}

export const TodoList: React.FC<TodoList> = ({
  // todos,
  // id,
  plan,
  onRemoveTodo,
  onToggleTodo,
}) => {
  if (plan.todos.length === 0) {
    return <p className="center">No todos yet</p>;
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();

    plan.todos = plan.todos.filter((todo) => todo.id !== id);

    onRemoveTodo(plan);
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
                onChange={() => onToggleTodo(todo.id)}
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
