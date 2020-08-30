import React from "react";
import { IPlan } from "../interfaces";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

interface PlanListProps {
  plans: IPlan[];
  onRemovePlan(id: number): void;
  onUpdateTodos(plan: IPlan): void;
  onAddTodo(title: string, plan_id: number): void;
}

export const PlanList: React.FC<PlanListProps> = ({
  plans,
  onRemovePlan,
  onAddTodo,
  onUpdateTodos,
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
        return (
          <li className="plan m-1" key={plan.id}>
            <label>
              <span>Plan: {plan.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => removeHandler(e, plan.id)}
              >
                delete
              </i>
            </label>
            <TodoForm onAddTodo={onAddTodo} plan_id={plan.id} />
            <TodoList plan={plan} onUpdateTodos={() => onUpdateTodos(plan)} />
          </li>
        );
      })}
    </ul>
  );
};
