"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  getDoctors,
  deleteDoctor,
} from "../services/doctor.service";

export default function useDoctors() {
  const [doctors, setDoctors] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const fetchDoctors =
    useCallback(async () => {
      try {
        setLoading(true);

        const result =
          await getDoctors();

        setDoctors(result.data);
      } finally {
        setLoading(false);
      }
    }, []);

  async function removeDoctor(id) {
    await deleteDoctor(id);

    fetchDoctors();
  }

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return {
    doctors,
    loading,
    fetchDoctors,
    removeDoctor,
  };
}