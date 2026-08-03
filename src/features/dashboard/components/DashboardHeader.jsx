import { getGreeting } from "@/shared/utils/getGreeting";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          {getGreeting()}, Admin 👋
        </h1>

        <p className="text-muted-foreground mt-1">
          {today}
        </p>
      </div>
    </div>
  );
}