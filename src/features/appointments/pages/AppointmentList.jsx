"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";

import useAppointments from "../hooks/useAppointments";

import AppointmentHeader from "../components/AppointmentHeader";
import AppointmentSearch from "../components/AppointmentSearch";
import AppointmentFilters from "../components/AppointmentFilters";
import AppointmentTable from "../components/AppointmentTable";
import AppointmentCalendar from "../components/AppointmentCalendar";
import AppointmentQueue from "../components/AppointmentQueue";
import DeleteAppointmentDialog from "../components/DeleteAppointmentDialog";

export default function AppointmentList() {
  const {
    appointments,
    loading,
    removeAppointment,
  } = useAppointments();

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("ALL");

  const [selected, setSelected] = useState(null);

  const [openDelete, setOpenDelete] = useState(false);

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const patient =
        `${appointment.patient?.user?.firstName ?? ""} ${appointment.patient?.user?.lastName ?? ""}`.toLowerCase();

      const doctor =
        `${appointment.doctor?.user?.firstName ?? ""} ${appointment.doctor?.user?.lastName ?? ""}`.toLowerCase();

      const matchesSearch =
        patient.includes(search.toLowerCase()) ||
        doctor.includes(search.toLowerCase());

      const matchesStatus =
        status === "ALL"
          ? true
          : appointment.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [appointments, search, status]);

  async function handleDelete() {
    try {
      await removeAppointment(selected);

      toast.success(
        "Appointment deleted successfully."
      );

      setOpenDelete(false);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="space-y-6">
      <AppointmentHeader
        totalAppointments={filteredAppointments.length}
      />

      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <AppointmentSearch
          value={search}
          onChange={setSearch}
        />

        <AppointmentFilters
          status={status}
          setStatus={setStatus}
        />
      </div>

      <AppointmentCalendar
        appointments={filteredAppointments}
      />

      <AppointmentQueue
        appointments={filteredAppointments.filter(
          (appointment) =>
            appointment.status !== "COMPLETED"
        )}
      />

      <AppointmentTable
        appointments={filteredAppointments}
        loading={loading}
        onDelete={(id) => {
          setSelected(id);
          setOpenDelete(true);
        }}
      />

      <DeleteAppointmentDialog
        open={openDelete}
        onClose={() =>
          setOpenDelete(false)
        }
        onConfirm={handleDelete}
      />
    </div>
  );
}