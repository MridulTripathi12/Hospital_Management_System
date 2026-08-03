"use client";

import Link from "next/link";

import {
  MoreHorizontal,
  Eye,
  Pencil,
  CalendarPlus,
  Receipt,
  Trash2,
} from "lucide-react";

import { Button } from "@/shared/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

export default function PatientActions({
  patient,
  onDelete,
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <Link href={`/patients/${patient.id}`}>
          <DropdownMenuItem>
            <Eye className="mr-2 h-4 w-4" />
            View Profile
          </DropdownMenuItem>
        </Link>

        <Link href={`/patients/${patient.id}/edit`}>
          <DropdownMenuItem>
            <Pencil className="mr-2 h-4 w-4" />
            Edit Patient
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <CalendarPlus className="mr-2 h-4 w-4" />
          Book Appointment
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Receipt className="mr-2 h-4 w-4" />
          Generate Invoice
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => onDelete(patient)}
          className="text-red-600 focus:text-red-600"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Patient
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}