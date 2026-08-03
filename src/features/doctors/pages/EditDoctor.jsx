"use client";

import DoctorForm from "../forms/DoctorForm";

export default function AddDoctor() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Add Doctor
      </h1>

      <DoctorForm />
    </div>
  );
}