import { LucideIcon } from "lucide-react";

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}) => {
  return (
    <div className="border rounded-md flex items-center gap-x-4 p-3">
      <Icon size={40}/>
      <div>
        <p className="font-medium">
          {label}
        </p>
        <p className="text-gray-500 text-sm">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  )
}