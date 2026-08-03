"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

const timeline = [
  "Doctor Joined Hospital",
  "Completed 500 Consultations",
  "Received Best Doctor Award",
  "Completed 1000 Patients",
];

export default function DoctorTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Activity Timeline
        </CardTitle>
      </CardHeader>

      <CardContent>
        {timeline.map((item, index) => (
          <div
            key={index}
            className="mb-4 flex gap-4"
          >
            <div className="mt-2 h-3 w-3 rounded-full bg-blue-600"></div>

            <p>{item}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}