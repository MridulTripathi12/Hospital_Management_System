export function getPatientName(patient) {
  return `${patient.firstName} ${patient.lastName}`;
}

export function getPatientInitials(patient) {
  return `${patient.firstName[0]}${patient.lastName[0]}`;
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function calculateAge(dob) {
  const today = new Date();
  const birth = new Date(dob);

  let age = today.getFullYear() - birth.getFullYear();

  const month =
    today.getMonth() - birth.getMonth();

  if (
    month < 0 ||
    (month === 0 &&
      today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}