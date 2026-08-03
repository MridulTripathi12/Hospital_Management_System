"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";

function InfoItem({ label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p className="font-medium">
        {value || "-"}
      </p>
    </div>
  );
}

export default function PatientInformation({
  patient,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Patient Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <InfoItem
            label="Patient ID"
            value={patient.patientId}
          />

          <InfoItem
            label="Registration Date"
            value={new Intl.DateTimeFormat("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }).format(new Date(patient.createdAt))}
          />

          <InfoItem
            label="First Name"
            value={patient.firstName}
          />

          <InfoItem
            label="Last Name"
            value={patient.lastName}
          />

          <InfoItem
            label="Age"
            value={`${patient.age} Years`}
          />

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Gender
            </p>

            <Badge>
              {patient.gender}
            </Badge>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Blood Group
            </p>

            <Badge variant="outline">
              {patient.bloodGroup || "-"}
            </Badge>
          </div>

          <InfoItem
            label="Phone Number"
            value={patient.phone}
          />

          <InfoItem
            label="Email Address"
            value={patient.email}
          />

          <div className="md:col-span-2">
            <InfoItem
              label="Address"
              value={patient.address}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}