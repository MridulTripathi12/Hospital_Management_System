"use client";

import { useCallback, useEffect, useState } from "react";

import {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "../services/appointment.service";

export default function useAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = useCallback(async () => {
    try {
      setLoading(true);

      const result = await getAppointments();

      setAppointments(result.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addAppointment = async (data) => {
    await createAppointment(data);
    fetchAppointments();
  };

  const editAppointment = async (id, data) => {
    await updateAppointment(id, data);
    fetchAppointments();
  };

  const removeAppointment = async (id) => {
    await deleteAppointment(id);
    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  return {
    appointments,
    loading,
    fetchAppointments,
    addAppointment,
    editAppointment,
    removeAppointment,
  };
}