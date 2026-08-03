"use client";

import Link from "next/link";
import { UserPlus } from "lucide-react";

import { Button } from "@/shared/ui/button";

export default function DoctorHeader({
  totalDoctors = 0,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Doctors
        </h1>

        <p className="text-muted-foreground">
          Manage hospital doctors.
        </p>

        <p className="mt-2 text-sm font-medium text-blue-600">
          Total Doctors : {totalDoctors}
        </p>
      </div>

      <Link href="/doctors/add">
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Doctor
        </Button>
      </Link>
    </div>
  );
}