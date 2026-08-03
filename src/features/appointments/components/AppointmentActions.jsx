"use client";

import Link from "next/link";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { Button } from "@/shared/ui/button";

export default function AppointmentActions({
  appointment,
  onDelete,
}) {
  return (
    <div className="flex gap-2">
      <Link
        href={`/appointments/${appointment.id}`}
      >
        <Button
          variant="outline"
          size="icon"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </Link>

      <Link
        href={`/appointments/${appointment.id}/edit`}
      >
        <Button
          variant="outline"
          size="icon"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </Link>

      <Button
        variant="destructive"
        size="icon"
        onClick={() =>
          onDelete(appointment.id)
        }
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}