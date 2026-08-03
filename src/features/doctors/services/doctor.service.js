const BASE_URL = "/api/doctors";

/**
 * Get Doctors
 */
export async function getDoctors() {
  const response = await fetch(BASE_URL);

  const result = await response.json();

  if (!response.ok)
    throw new Error(result.message);

  return result;
}

/**
 * Get Doctor
 */
export async function getDoctor(id) {
  const response = await fetch(
    `${BASE_URL}/${id}`
  );

  const result = await response.json();

  if (!response.ok)
    throw new Error(result.message);

  return result;
}

/**
 * Create Doctor
 */
export async function createDoctor(data) {
  const response = await fetch(BASE_URL, {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json",
    },

    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok)
    throw new Error(result.message);

  return result;
}

/**
 * Update Doctor
 */
export async function updateDoctor(
  id,
  data
) {
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (!response.ok)
    throw new Error(result.message);

  return result;
}

/**
 * Delete Doctor
 */
export async function deleteDoctor(id) {
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: "DELETE",
    }
  );

  const result = await response.json();

  if (!response.ok)
    throw new Error(result.message);

  return result;
}