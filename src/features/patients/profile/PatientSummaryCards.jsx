"use client";

import {
  CalendarDays,
  Receipt,
  FileText,
  FlaskConical,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/shared/ui/card";

const stats = [
  {
    title: "Appointments",
    value: 24,
    icon: CalendarDays,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Bills",
    value: 12,
    icon: Receipt,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Prescriptions",
    value: 18,
    icon: FileText,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Lab Reports",
    value: 9,
    icon: FlaskConical,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

export default function PatientSummaryCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="transition-all hover:shadow-md"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>
              </div>

              <div
                className={`rounded-xl p-4 ${item.bg}`}
              >
                <Icon
                  className={`h-7 w-7 ${item.color}`}
                />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}