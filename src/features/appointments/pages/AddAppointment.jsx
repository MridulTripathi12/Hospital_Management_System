"use client";

import AppointmentForm from "../forms/AppointmentForm";

export default function AddAppointment() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Book Appointment
        </h1>

        <p className="text-muted-foreground">
          Schedule a new appointment.
        </p>
      </div>

      <AppointmentForm />
    </div>
  );
}