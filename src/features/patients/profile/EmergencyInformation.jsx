"use client";

import {
  User,
  Phone,
  HeartHandshake,
  MapPin,
  AlertTriangle,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

function EmergencyItem({
  icon: Icon,
  label,
  value,
  color = "text-red-500",
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border p-4">
      <div className="rounded-lg bg-red-50 p-2">
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

export default function EmergencyInformation({
  patient,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Emergency Contact
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <EmergencyItem
            icon={User}
            label="Contact Person"
            value={patient.emergencyName}
          />

          <EmergencyItem
            icon={Phone}
            label="Phone Number"
            value={patient.emergencyContact}
          />

          <EmergencyItem
            icon={HeartHandshake}
            label="Relationship"
            value={patient.relationship}
          />

          <EmergencyItem
            icon={MapPin}
            label="Emergency Address"
            value={patient.emergencyAddress}
          />

          <EmergencyItem
            icon={AlertTriangle}
            label="Emergency Notes"
            value={patient.emergencyNotes}
          />
        </div>
      </CardContent>
    </Card>
  );
}