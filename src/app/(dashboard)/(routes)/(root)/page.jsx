import CourseList from "./_components/courses-list";
import { InfoCard } from "./_components/info-card";
import { CheckCircle, Clock } from "lucide-react";
import Keywords from "../../_components/keywords";

export default function Dashboard() {
  return (
    <div className="">
      <Keywords />
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <InfoCard
            icon={Clock}
            label="In Progress"
            numberOfItems='5'
          />
          <InfoCard
            icon={CheckCircle}
            label="Completed"
            numberOfItems='3'
            variant="success"
          />
        </div>
      </div>
      <CourseList />
    </div>
  );
}
