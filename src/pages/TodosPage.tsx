import React, { useState, useEffect } from "react";
import { PlanForm } from "../components/PlanForm";
import { PlanList } from "../components/PlanList";
import { ITodo, IPlan } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("plans") || "[]") as IPlan[];
    setPlans(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

  const addHandler = (title: string) => {
    const newPlan: IPlan = {
      title,
      id: Date.now(),
      todos: [],
    };

    setPlans((prev) => [newPlan, ...prev]);
  };

  const addTodoHandler = (title: string, plan_id: number) => {
    setPlans((prev) =>
      prev.map((plan) => {
        if (plan.id === plan_id) {
          const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
          };

          plan.todos = [newTodo, ...plan.todos];
        }
        return plan;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm("Are you sure");
    if (shouldRemove) setPlans((prev) => prev.filter((plan) => plan.id !== id));
  };

  const updateTodosHandler = (plan: IPlan) => {
    setPlans((prev) =>
      prev.map((prev_plan) => {
        if (prev_plan.id === plan.id) {
          return plan;
        }
        return prev_plan;
      })
    );
  };

  return (
    <React.Fragment>
      <PlanForm onAddPlan={addHandler} />
      <PlanList
        plans={plans}
        onUpdateTodos={updateTodosHandler}
        onRemovePlan={removeHandler}
        onAddTodo={addTodoHandler}
      />
    </React.Fragment>
  );
};
