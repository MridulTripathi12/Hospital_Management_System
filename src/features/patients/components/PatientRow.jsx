"use client";

import PatientActions from "./PatientActions";

import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";

function getInitials(firstName, lastName) {
  return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`;
}

function getGenderColor(gender) {
  switch (gender) {
    case "MALE":
      return "default";

    case "FEMALE":
      return "secondary";

    default:
      return "outline";
  }
}

function getStatusColor(status) {
  switch (status) {
    case "ACTIVE":
      return "default";

    case "INACTIVE":
      return "destructive";

    default:
      return "outline";
  }
}

export default function PatientRow({
  patient,
  onDelete,
}) {
  return (
    <tr className="border-b transition hover:bg-muted/40">
      {/* Avatar + Name */}

      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>
              {getInitials(
                patient.firstName,
                patient.lastName
              )}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-medium">
              {patient.firstName} {patient.lastName}
            </p>

            <p className="text-sm text-muted-foreground">
              {patient.email || "-"}
            </p>
          </div>
        </div>
      </td>

      {/* Patient ID */}

      <td className="px-4 py-4 font-medium">
        {patient.patientId}
      </td>

      {/* Gender */}

      <td className="px-4 py-4">
        <Badge variant={getGenderColor(patient.gender)}>
          {patient.gender}
        </Badge>
      </td>

      {/* Age */}

      <td className="px-4 py-4">
        {patient.age}
      </td>

      {/* Blood Group */}

      <td className="px-4 py-4">
        <Badge variant="outline">
          {patient.bloodGroup || "-"}
        </Badge>
      </td>

      {/* Phone */}

      <td className="px-4 py-4">
        {patient.phone}
      </td>

      {/* Status */}

      <td className="px-4 py-4">
        <Badge variant={getStatusColor(patient.status)}>
          {patient.status}
        </Badge>
      </td>

      {/* Registration */}

     <td className="px-4 py-4 text-sm">
  {new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(patient.createdAt))}
</td>

      {/* Actions */}

      <td className="px-4 py-4 text-right">
        <PatientActions
          patient={patient}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}