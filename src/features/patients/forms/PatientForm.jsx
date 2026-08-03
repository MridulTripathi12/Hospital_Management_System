"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/shared/ui/button";

import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import EmergencyContact from "./EmergencyContact";
import MedicalInfo from "./MedicalInfo";

import { createPatient } from "../services/patient.service";
import { patientSchema } from "../validations/patient.schema";

export default function PatientForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(patientSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      bloodGroup: "",
      emergencyContact: "",
    },
  });

  async function onSubmit(data) {
    try {
      setLoading(true);

      await createPatient(data);

      toast.success("Patient created successfully.");

      reset();

      router.push("/patients");
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Failed to create patient.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <PersonalInfo
        register={register}
        errors={errors}
      />

      <ContactInfo
        register={register}
        errors={errors}
      />

      <MedicalInfo
        register={register}
        errors={errors}
      />

      <EmergencyContact
        register={register}
        errors={errors}
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          disabled={loading}
        >
          {loading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}

          {loading ? "Saving..." : "Save Patient"}
        </Button>
      </div>
    </form>
  );
}