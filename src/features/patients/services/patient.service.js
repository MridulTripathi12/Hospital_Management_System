const BASE_URL = "/api/patients";

/**
 * Get All Patients
 */
export async function getPatients() {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Unable to fetch patients");
  }

  return result.data;
}

/**
 * Get Single Patient
 */
export async function getPatient(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    credentials: "include",
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Unable to fetch patient");
  }

  return result.data;
}

/**
 * Create Patient
 */
export async function createPatient(data) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Unable to create patient");
  }

  return result.data;
}

/**
 * Update Patient
 */
export async function updatePatient(id, data) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Unable to update patient");
  }

  return result.data;
}

/**
 * Delete Patient
 */
export async function deletePatient(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Unable to delete patient");
  }

  return result;
}