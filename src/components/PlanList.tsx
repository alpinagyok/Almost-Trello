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
    return <h4 className="center">No plans yet</h4>;
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();

    onRemovePlan(id);
  };

  return (
    <div className="plans">
      {plans.map((plan) => {
        return (
          <div className="plan" key={plan.id}>
            <header>
              <span>Plan: {plan.title}</span>
              <i
                className="material-icons"
                onClick={(e) => removeHandler(e, plan.id)}
              >
                delete
              </i>
            </header>
            <TodoList plan={plan} onUpdateTodos={() => onUpdateTodos(plan)} />
            <TodoForm onAddTodo={onAddTodo} plan_id={plan.id} />
          </div>
        );
      })}
    </div>
  );
};
