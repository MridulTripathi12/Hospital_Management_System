"use client";

import Link from "next/link";

import {
  UserRoundPlus,
  Stethoscope,
} from "lucide-react";

import { Button } from "@/shared/ui/button";

export default function EmptyDoctors() {
  return (
    <div className="rounded-xl border border-dashed py-20 text-center">
      <Stethoscope className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />

      <h2 className="text-xl font-semibold">
        No Doctors Found
      </h2>

      <p className="mt-2 text-muted-foreground">
        Start by adding your first doctor.
      </p>

      <Link href="/doctors/add">
        <Button className="mt-6">
          <UserRoundPlus className="mr-2 h-4 w-4" />

          Add Doctor
        </Button>
      </Link>
    </div>
  );
}