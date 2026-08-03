"use client";

import {
  Heart,
  Activity,
  Pill,
  ShieldAlert,
  Ruler,
  Weight,
  Stethoscope,
  FileText,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

function MedicalItem({
  icon: Icon,
  label,
  value,
  color = "text-blue-600",
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border p-4">
      <div className="rounded-lg bg-blue-50 p-2">
        <Icon className={`h-5 w-5 ${color}`} />
      </div>

      <div>
        <p className="text-sm text-muted-foreground">
          {label}
        </p>

        <p className="font-medium">
          {value || "Not Available"}
        </p>
      </div>
    </div>
  );
}

export default function MedicalInformation({
  patient,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Medical Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <MedicalItem
            icon={Heart}
            label="Blood Group"
            value={patient.bloodGroup}
            color="text-red-500"
          />

          <MedicalItem
            icon={ShieldAlert}
            label="Allergies"
            value={patient.allergies}
            color="text-orange-500"
          />

          <MedicalItem
            icon={Pill}
            label="Current Medication"
            value={patient.medications}
            color="text-green-600"
          />

          <MedicalItem
            icon={Activity}
            label="Chronic Diseases"
            value={patient.diseases}
            color="text-purple-600"
          />

          <MedicalItem
            icon={Ruler}
            label="Height"
            value={
              patient.height
                ? `${patient.height} cm`
                : null
            }
          />

          <MedicalItem
            icon={Weight}
            label="Weight"
            value={
              patient.weight
                ? `${patient.weight} kg`
                : null
            }
          />

          <MedicalItem
            icon={Stethoscope}
            label="Blood Pressure"
            value={patient.bloodPressure}
          />

          <MedicalItem
            icon={FileText}
            label="Medical Notes"
            value={patient.notes}
          />
        </div>
      </CardContent>
    </Card>
  );
}