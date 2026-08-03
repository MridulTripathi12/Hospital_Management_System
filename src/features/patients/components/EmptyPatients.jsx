"use client";

import Link from "next/link";

import {
  UserRoundX,
  Plus,
  Upload,
} from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";

export default function EmptyPatients() {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-20 text-center">
        {/* Icon */}

        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
          <UserRoundX className="h-10 w-10 text-slate-500" />
        </div>

        {/* Heading */}

        <h2 className="text-2xl font-bold">
          No Patients Found
        </h2>

        {/* Description */}

        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          There are no patient records available yet.
          Start by adding your first patient or import
          patients from an existing database.
        </p>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/patients/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Patient
            </Button>
          </Link>

          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Patients
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}