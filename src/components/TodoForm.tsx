import React, { useRef } from "react";

interface TodoFormProps {
  onAddTodo(title: string, plan_id: number): void;
  plan_id: number;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAddTodo(ref.current!.value, props.plan_id);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter TODO"
        onKeyPress={keyPressHandler}
      />
      <label className="active" htmlFor="title">
        Enter TODO
      </label>
    </div>
  );
};
