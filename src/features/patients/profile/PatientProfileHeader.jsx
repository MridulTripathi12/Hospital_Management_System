"use client";

import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

export default function PatientProfileHeader({
  patient,
}) {
  const initials = `${patient.firstName?.[0] ?? ""}${patient.lastName?.[0] ?? ""}`;

  return (
    <div className="rounded-xl border bg-background p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="text-2xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold">
                {patient.firstName} {patient.lastName}
              </h1>

              <Badge>
                {patient.patientId}
              </Badge>
            </div>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{patient.age} Years</span>

              <span>{patient.gender}</span>

              <span>{patient.bloodGroup || "-"}</span>

              <span>{patient.phone}</span>

              <span>{patient.email || "-"}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/patients">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>

          <Link href={`/patients/${patient.id}/edit`}>
            <Button>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Patient
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}