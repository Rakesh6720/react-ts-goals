import { ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  handleDeleteGoal: (id: number) => void;
  children: ReactNode;
  goalID: number;
}

export default function CourseGoal({
  title,
  handleDeleteGoal,
  children,
  goalID,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => handleDeleteGoal(goalID)}>Delete</button>
    </article>
  );
}
