import { type CourseGoal as CourseGoalType } from "../types/CourseGoal";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

interface CourseGoalListProps {
  goals: CourseGoalType[];
  handleDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  handleDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal: CourseGoalType) => (
          <li key={goal.id}>
            <CourseGoal
              handleDeleteGoal={handleDeleteGoal}
              title={goal.title}
              goalID={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
