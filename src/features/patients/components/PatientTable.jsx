"use client";

import { useState } from "react";

import PatientRow from "./PatientRow";
import EmptyPatients from "./EmptyPatients";
import DeletePatientDialog from "./DeletePatientDialog";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import { Card, CardContent } from "@/shared/ui/card";

export default function PatientTable({
  patients = [],
  loading = false,
}) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  function handleDelete(patient) {
    setSelectedPatient(patient);
    setDeleteOpen(true);
  }

  async function confirmDelete() {
    // API call will be added later

    console.log("Delete Patient:", selectedPatient);

    setDeleteOpen(false);
    setSelectedPatient(null);
  }

  if (!loading && patients.length === 0) {
    return <EmptyPatients />;
  }

  return (
    <>
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>

                  <TableHead>ID</TableHead>

                  <TableHead>Gender</TableHead>

                  <TableHead>Age</TableHead>

                  <TableHead>Blood Group</TableHead>

                  <TableHead>Phone</TableHead>

                  <TableHead>Status</TableHead>

                  <TableHead>Registered</TableHead>

                  <TableHead className="text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {loading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <TableRow key={index}>
                        <td
                          colSpan={9}
                          className="px-6 py-6"
                        >
                          <div className="h-5 w-full animate-pulse rounded bg-muted" />
                        </td>
                      </TableRow>
                    ))
                  : patients.map((patient) => (
                      <PatientRow
                        key={patient.id}
                        patient={patient}
                        onDelete={handleDelete}
                      />
                    ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <DeletePatientDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        patient={selectedPatient}
        onConfirm={confirmDelete}
      />
    </>
  );
}