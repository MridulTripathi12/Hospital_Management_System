"use client";

import {
  Avatar,
  AvatarFallback,
} from "@/shared/ui/avatar";

import { Badge } from "@/shared/ui/badge";

export default function DoctorProfileHeader({
  doctor,
}) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <div className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarFallback>
            {doctor.user.name
              ?.charAt(0)
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-3xl font-bold">
            Dr. {doctor.user.name}
          </h1>

          <div className="mt-2 flex gap-2">
            <Badge>
              {doctor.department?.name ??
                "-"}
            </Badge>

            <Badge variant="secondary">
              {
                doctor.specialization
              }
            </Badge>
          </div>

          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p>
              Email :
              {" "}
              {doctor.user.email}
            </p>

            <p>
              Phone :
              {" "}
              {doctor.phone || "-"}
            </p>

            <p>
              Experience :
              {" "}
              {doctor.experience} Years
            </p>

            <p>
              Fee :
              {" "}
              ₹
              {doctor.consultationFee}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}