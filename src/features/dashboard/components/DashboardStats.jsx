import {
  Users,
  UserRound,
  CalendarDays,
  IndianRupee,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Patients"
        value="1,245"
        icon={Users}
        color="bg-blue-600"
      />

      <StatCard
        title="Doctors"
        value="84"
        icon={UserRound}
        color="bg-emerald-600"
      />

      <StatCard
        title="Today's Appointments"
        value="56"
        icon={CalendarDays}
        color="bg-orange-500"
      />

      <StatCard
        title="Revenue"
        value="₹12.5L"
        icon={IndianRupee}
        color="bg-violet-600"
      />
    </div>
  );
}