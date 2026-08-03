export function getDoctorFullName(doctor) {
  return doctor?.name || "";
}

export function getDoctorInitials(name = "") {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function formatFee(fee) {
  return `₹${Number(fee).toFixed(2)}`;
}