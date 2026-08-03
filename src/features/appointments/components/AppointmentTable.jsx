"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
} from "@/shared/ui/table";

import AppointmentRow from "./AppointmentRow";
import EmptyAppointments from "./EmptyAppointments";

export default function AppointmentTable({
  appointments,
  onDelete,
}) {
  if (!appointments.length) {
    return <EmptyAppointments />;
  }

  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Patient
            </TableHead>

            <TableHead>
              Doctor
            </TableHead>

            <TableHead>Date</TableHead>

            <TableHead>Time</TableHead>

            <TableHead>Queue</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {appointments.map(
            (appointment) => (
              <AppointmentRow
                key={appointment.id}
                appointment={
                  appointment
                }
                onDelete={onDelete}
              />
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}