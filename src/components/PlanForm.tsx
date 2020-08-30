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
    <div className="plan-form">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter Plan and press ENTER"
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};
