"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { Button } from "@/shared/ui/button";

import { appointmentSchema } from "../validations/appointment.schema";

import {
  createAppointment,
  updateAppointment,
} from "../services/appointment.service";

import PatientSelection from "./PatientSelection";
import DoctorSelection from "./DoctorSelection";
import AppointmentDetails from "./AppointmentDetails";
import AppointmentStatus from "./AppointmentStatus";
import NotesSection from "./NotesSection";

export default function AppointmentForm({
  initialData = null,
}) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const isEdit = !!initialData;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver:
      zodResolver(appointmentSchema),

    defaultValues:
      initialData || {
        duration: 15,
        appointmentType: "OPD",
        status: "SCHEDULED",
      },
  });

  async function onSubmit(data) {
    try {
      setLoading(true);

      if (isEdit) {
        await updateAppointment(
          initialData.id,
          data
        );

        toast.success(
          "Appointment updated."
        );
      } else {
        await createAppointment(data);

        toast.success(
          "Appointment booked."
        );

        reset();
      }

      router.push("/appointments");

      router.refresh();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <PatientSelection
        register={register}
        errors={errors}
      />

      <DoctorSelection
        register={register}
        errors={errors}
      />

      <AppointmentDetails
        register={register}
        errors={errors}
      />

      <AppointmentStatus
        register={register}
      />

      <NotesSection
        register={register}
      />

      <div className="flex justify-end">
        <Button
          disabled={loading}
          type="submit"
        >
          {loading
            ? "Saving..."
            : isEdit
            ? "Update Appointment"
            : "Book Appointment"}
        </Button>
      </div>
    </form>
  );
}