"use client";

import AppointmentActions from "./AppointmentActions";

export default function AppointmentRow({
  appointment,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-muted/50">
      {/* Patient */}
      <td className="px-4 py-3">
        <div>
          <p className="font-medium">
            {appointment.patient.firstName}{" "}
            {appointment.patient.lastName}
          </p>

          <p className="text-xs text-muted-foreground">
            {appointment.patient.phone || "-"}
          </p>
        </div>
      </td>

      {/* Doctor */}
      <td className="px-4 py-3">
        <div>
          <p className="font-medium">
            Dr. {appointment.doctor.user.name}
          </p>

          <p className="text-xs text-muted-foreground">
            {appointment.doctor.specialization}
          </p>
        </div>
      </td>

      {/* Department */}
      <td className="px-4 py-3">
        {appointment.doctor.department?.name ??
          "-"}
      </td>

      {/* Date */}
      <td className="px-4 py-3">
        {new Date(
          appointment.appointmentDate
        ).toLocaleDateString("en-GB")}
      </td>

      {/* Time */}
      <td className="px-4 py-3">
        {appointment.appointmentTime}
      </td>

      {/* Queue */}
      <td className="px-4 py-3 text-center">
        {appointment.queueNumber ?? "-"}
      </td>

      {/* Status */}
      <td className="px-4 py-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium
          ${
            appointment.status === "SCHEDULED"
              ? "bg-blue-100 text-blue-700"
              : ""
          }
          ${
            appointment.status === "CONFIRMED"
              ? "bg-green-100 text-green-700"
              : ""
          }
          ${
            appointment.status === "COMPLETED"
              ? "bg-gray-200 text-gray-700"
              : ""
          }
          ${
            appointment.status === "CANCELLED"
              ? "bg-red-100 text-red-700"
              : ""
          }`}
        >
          {appointment.status}
        </span>
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <AppointmentActions
          appointment={appointment}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}