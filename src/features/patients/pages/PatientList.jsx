"use client";

import { useMemo, useState } from "react";

import PatientHeader from "../components/PatientHeader";
import PatientSearch from "../components/PatientSearch";
import PatientFilters from "../components/PatientFilters";
import PatientTable from "../components/PatientTable";
import usePatients from "../hooks/usePatients";

export default function PatientList() {
  const [search, setSearch] = useState("");

  const [gender, setGender] = useState("ALL");
  const [bloodGroup, setBloodGroup] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  // Temporary Dummy Data
  // Later this will come from API

  const { patients, loading } = usePatients();

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const fullName =
        `${patient.firstName} ${patient.lastName}`.toLowerCase();

      const matchesSearch =
        fullName.includes(search.toLowerCase()) ||
        patient.patientId
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        patient.phone.includes(search);

      const matchesGender =
        gender === "ALL" ||
        patient.gender === gender;

      const matchesBlood =
        bloodGroup === "ALL" ||
        patient.bloodGroup === bloodGroup;

      const matchesStatus =
        status === "ALL" ||
        patient.status === status;

      return (
        matchesSearch &&
        matchesGender &&
        matchesBlood &&
        matchesStatus
      );
    });
  }, [
    search,
    gender,
    bloodGroup,
    status,
    patients,
  ]);

  function resetFilters() {
    setGender("ALL");
    setBloodGroup("ALL");
    setStatus("ALL");
    setSearch("");
  }

  return (
    <div className="space-y-6">
      <PatientHeader />

      <div className="flex flex-col gap-4 rounded-xl border bg-background p-4 lg:flex-row lg:items-center lg:justify-between">
        <PatientSearch
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />

        <PatientFilters
          gender={gender}
          bloodGroup={bloodGroup}
          status={status}
          onGenderChange={setGender}
          onBloodGroupChange={setBloodGroup}
          onStatusChange={setStatus}
          onReset={resetFilters}
        />
      </div>

      <PatientTable
        patients={filteredPatients}
        loading={loading}
      />
    </div>
  );
}