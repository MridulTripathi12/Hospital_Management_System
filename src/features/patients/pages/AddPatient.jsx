"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import PatientForm from "../forms/PatientForm";

import { Button } from "@/shared/ui/button";

export default function AddPatient() {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Add New Patient
          </h1>

          <p className="mt-1 text-muted-foreground">
            Register a new patient in the hospital.
          </p>
        </div>

        <Link href="/patients">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      </div>

      <PatientForm />
    </div>
  );
}