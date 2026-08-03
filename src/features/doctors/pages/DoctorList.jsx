"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";

import useDoctors from "../hooks/useDoctors";

import DoctorHeader from "../components/DoctorHeader";
import DoctorSearch from "../components/DoctorSearch";
import DoctorFilters from "../components/DoctorFilters";
import DoctorTable from "../components/DoctorTable";
import DeleteDoctorDialog from "../components/DeleteDoctorDialog";

export default function DoctorList() {
  const {
    doctors,
    loading,
    removeDoctor,
  } = useDoctors();

  const [search, setSearch] = useState("");

  const [status, setStatus] =
    useState("ALL");

  const [selectedDoctor, setSelectedDoctor] =
    useState(null);

  const [openDelete, setOpenDelete] =
    useState(false);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        doctor.specialization
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "ALL"
          ? true
          : doctor.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );
    });
  }, [doctors, search, status]);

  async function confirmDelete() {
    try {
      await removeDoctor(selectedDoctor);

      toast.success(
        "Doctor deleted successfully."
      );

      setOpenDelete(false);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="space-y-6">
      <DoctorHeader
        totalDoctors={
          filteredDoctors.length
        }
      />

      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <DoctorSearch
          value={search}
          onChange={setSearch}
        />

        <DoctorFilters
          status={status}
          setStatus={setStatus}
        />
      </div>

      <DoctorTable
        doctors={filteredDoctors}
        loading={loading}
        onDelete={(id) => {
          setSelectedDoctor(id);
          setOpenDelete(true);
        }}
      />

      <DeleteDoctorDialog
        open={openDelete}
        onClose={() =>
          setOpenDelete(false)
        }
        onConfirm={confirmDelete}
      />
    </div>
  );
}