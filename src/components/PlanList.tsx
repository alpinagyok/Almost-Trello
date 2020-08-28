import React from "react";
import { ITodo, IPlan } from "../interfaces";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

interface PlanListProps {
  plans: IPlan[];
  // onToggleTodo(id: number): void;
  onRemovePlan(id: number): void;
  onRemoveTodo(plan: IPlan): void;
  onAddTodo(title: string, plan_id: number): void;
}

export const PlanList: React.FC<PlanListProps> = ({
  plans,
  onRemovePlan,
  onAddTodo,
  onRemoveTodo,
  // onToggleTodo,
}) => {
  if (plans.length === 0) {
    return <p className="center">No todos yet</p>;
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();

    onRemovePlan(id);
  };

  return (
    <ul>
      {plans.map((plan) => {
        // const classes = ["todo"];
        const classes = [""];

        return (
          <li className={classes.join(" ")} key={plan.id}>
            <label>
              <span>Plan: {plan.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => removeHandler(e, plan.id)}
              >
                delete
              </i>
            </label>
            <TodoList
              plan={plan}
              onRemoveTodo={() => onRemoveTodo(plan)}
              onToggleTodo={() => console.log("hello")}
            />
            <TodoForm onAddTodo={onAddTodo} plan_id={plan.id} />
          </li>
        );
      })}
    </ul>
  );
};
