"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";

export default function DoctorAvailability({
  doctor,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Doctor Availability
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        <div className="flex justify-between">
          <span>Doctor</span>

          <strong>
            Dr. {doctor.user.firstName}{" "}
            {doctor.user.lastName}
          </strong>
        </div>

        <div className="flex justify-between">
          <span>Department</span>

          <span>
            {doctor.department?.name}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Working Days</span>

          <span>
            {doctor.workingDays || "-"}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Timing</span>

          <span>
            {doctor.startTime} - {doctor.endTime}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>

          <Badge>
            {doctor.status}
          </Badge>
        </div>

      </CardContent>
    </Card>
  );
}