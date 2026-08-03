"use client";

import Link from "next/link";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { Button } from "@/shared/ui/button";

export default function DoctorActions({
  doctor,
  onDelete,
}) {
  return (
    <div className="flex gap-2">
      <Link
        href={`/doctors/${doctor.id}`}
      >
        <Button
          size="icon"
          variant="outline"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </Link>

      <Link
        href={`/doctors/${doctor.id}/edit`}
      >
        <Button
          size="icon"
          variant="outline"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </Link>

      <Button
        size="icon"
        variant="destructive"
        onClick={() =>
          onDelete(doctor.id)
        }
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}