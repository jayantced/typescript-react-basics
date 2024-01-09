import { ReactNode } from "react";
import { CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no coarse goals yet.</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = <InfoBox mode="warning" severity='high'>You have too many goals.</InfoBox>;
  }
  
  return (
    <>
    {warningBox}
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
}
