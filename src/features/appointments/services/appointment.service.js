const BASE_URL = "/api/appointments";

/**
 * Get All Appointments
 */
export async function getAppointments() {
  const response = await fetch(BASE_URL);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch appointments.");
  }

  return result;
}

/**
 * Get Appointment By ID
 */
export async function getAppointment(id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch appointment.");
  }

  return result;
}

/**
 * Create Appointment
 */
export async function createAppointment(data) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to create appointment.");
  }

  return result;
}

/**
 * Update Appointment
 */
export async function updateAppointment(id, data) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to update appointment.");
  }

  return result;
}

/**
 * Delete Appointment
 */
export async function deleteAppointment(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to delete appointment.");
  }

  return result;
}

/**
 * Today's Appointments
 */
export async function getTodayAppointments() {
  const response = await fetch(`${BASE_URL}?today=true`);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}

/**
 * Doctor Appointments
 */
export async function getDoctorAppointments(doctorId) {
  const response = await fetch(
    `${BASE_URL}?doctorId=${doctorId}`
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}

/**
 * Patient Appointments
 */
export async function getPatientAppointments(patientId) {
  const response = await fetch(
    `${BASE_URL}?patientId=${patientId}`
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}