import React, { useRef } from "react";

interface PlanFormProps {
  onAddPlan(title: string): void;
}

export const PlanForm: React.FC<PlanFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAddPlan(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter Plan"
        onKeyPress={keyPressHandler}
      />
      <label className="active" htmlFor="title">
        Enter Plan
      </label>
    </div>
  );
};
