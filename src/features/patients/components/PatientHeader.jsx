"use client";

import Link from "next/link";
import { Plus, Download, Upload } from "lucide-react";

import { Button } from "@/shared/ui/button";

export default function PatientHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Patients
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage patient records, registrations and medical details.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Import
        </Button>

        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

        <Link href="/patients/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Patient
          </Button>
        </Link>
      </div>
    </div>
  );
}