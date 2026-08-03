"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

const patients = [
  {
    id: 1,
    name: "Rahul Sharma",
    disease: "Diabetes",
  },
  {
    id: 2,
    name: "Amit Singh",
    disease: "Hypertension",
  },
  {
    id: 3,
    name: "Neha Gupta",
    disease: "Migraine",
  },
];

export default function RecentPatients() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Recent Patients
        </CardTitle>
      </CardHeader>

      <CardContent>
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="flex items-center justify-between border-b py-3 last:border-none"
          >
            <div>
              <h4 className="font-semibold">
                {patient.name}
              </h4>

              <p className="text-sm text-muted-foreground">
                {patient.disease}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}