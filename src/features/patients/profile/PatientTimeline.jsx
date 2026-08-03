"use client";

import {
  UserPlus,
  CalendarDays,
  Stethoscope,
  FlaskConical,
  Receipt,
  Pill,
  CheckCircle2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

const timeline = [
  {
    id: 1,
    title: "Patient Registered",
    description: "Patient profile created successfully.",
    date: "01 Aug 2026 • 09:15 AM",
    icon: UserPlus,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Appointment Booked",
    description: "Appointment with Dr. Amit Sharma.",
    date: "02 Aug 2026 • 10:30 AM",
    icon: CalendarDays,
    color: "bg-indigo-500",
  },
  {
    id: 3,
    title: "Doctor Consultation",
    description: "Consultation completed successfully.",
    date: "02 Aug 2026 • 11:00 AM",
    icon: Stethoscope,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Lab Test Ordered",
    description: "Complete Blood Count (CBC).",
    date: "02 Aug 2026 • 11:20 AM",
    icon: FlaskConical,
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Prescription Generated",
    description: "Medicines prescribed by doctor.",
    date: "02 Aug 2026 • 11:45 AM",
    icon: Pill,
    color: "bg-purple-500",
  },
  {
    id: 6,
    title: "Bill Paid",
    description: "Invoice INV-1001 paid successfully.",
    date: "02 Aug 2026 • 12:10 PM",
    icon: Receipt,
    color: "bg-emerald-500",
  },
];

export default function PatientTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Patient Activity Timeline
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="relative border-l-2 border-muted pl-6">
          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative mb-8 last:mb-0"
              >
                <div
                  className={`absolute -left-[39px] flex h-10 w-10 items-center justify-center rounded-full text-white ${item.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="rounded-xl border bg-background p-4 shadow-sm transition hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>

                  <p className="mt-3 text-xs text-muted-foreground">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}