"use client";

import AppointmentForm from "../forms/AppointmentForm";

export default function EditAppointment({
  appointment,
}) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Appointment
        </h1>

        <p className="text-muted-foreground">
          Update appointment information.
        </p>
      </div>

      <AppointmentForm
        initialData={appointment}
      />
    </div>
  );
}