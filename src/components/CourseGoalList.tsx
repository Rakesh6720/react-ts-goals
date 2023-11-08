import { type CourseGoal as CourseGoalType } from "../types/CourseGoal";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
  goals: CourseGoalType[];
  handleDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  handleDeleteGoal,
}: CourseGoalListProps) {
  return (
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
  );
}
