"use client";

import { useCallback, useEffect, useState } from "react";

import {
  getPatients,
  createPatient,
  updatePatient,
  deletePatient,
} from "../services/patient.service";

export default function usePatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPatients = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getPatients();

      setPatients(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  async function addPatient(data) {
    const patient = await createPatient(data);

    setPatients((prev) => [patient, ...prev]);

    return patient;
  }

  async function editPatient(id, data) {
    const updated = await updatePatient(id, data);

    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === id ? updated : patient
      )
    );

    return updated;
  }

  async function removePatient(id) {
    await deletePatient(id);

    setPatients((prev) =>
      prev.filter((patient) => patient.id !== id)
    );
  }

  return {
    patients,
    loading,
    fetchPatients,
    addPatient,
    editPatient,
    removePatient,
  };
}