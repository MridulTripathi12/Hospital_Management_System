import prisma from "@/lib/prisma";

export async function getPatients() {
  return prisma.patient.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getPatientById(id) {
  return prisma.patient.findUnique({
    where: { id },
  });
}

export async function createPatient(data) {
  return prisma.patient.create({
    data,
  });
}

export async function updatePatient(id, data) {
  return prisma.patient.update({
    where: { id },
    data,
  });
}

export async function deletePatient(id) {
  return prisma.patient.delete({
    where: { id },
  });
}