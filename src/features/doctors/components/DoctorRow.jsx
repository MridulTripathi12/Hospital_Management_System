"use client";

import DoctorActions from "./DoctorActions";

export default function DoctorRow({
  doctor,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-muted/50">
      <td className="px-4 py-3">
        <div>
          <p className="font-medium">
            Dr. {doctor.user.name}
          </p>

          <p className="text-xs text-muted-foreground">
            {doctor.user.email}
          </p>
        </div>
      </td>

      <td className="px-4 py-3">
        {doctor.department?.name ??
          "-"}
      </td>

      <td className="px-4 py-3">
        {doctor.specialization}
      </td>

      <td className="px-4 py-3">
        {doctor.experience} Years
      </td>

      <td className="px-4 py-3">
        ₹{doctor.consultationFee}
      </td>

      <td className="px-4 py-3">
        {doctor.roomNumber ?? "-"}
      </td>

      <td className="px-4 py-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            doctor.status ===
            "AVAILABLE"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {doctor.status}
        </span>
      </td>

      <td className="px-4 py-3">
        <DoctorActions
          doctor={doctor}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}