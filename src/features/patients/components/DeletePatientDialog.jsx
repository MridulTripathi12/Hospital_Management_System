"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";

import { Button } from "@/shared/ui/button";
import { Trash2 } from "lucide-react";

export default function DeletePatientDialog({
  open,
  onOpenChange,
  patient,
  onConfirm,
  loading = false,
}) {
  if (!patient) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <Trash2 className="h-7 w-7 text-red-600" />
          </div>

          <DialogTitle className="mt-4 text-center text-xl">
            Delete Patient
          </DialogTitle>

          <DialogDescription className="text-center">
            Are you sure you want to delete
            <span className="font-semibold text-foreground">
              {" "}
              {patient.firstName} {patient.lastName}
            </span>
            ?
            <br />
            <br />
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={() => onConfirm(patient)}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Patient"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}