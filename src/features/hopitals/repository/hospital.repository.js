import { prisma } from "@/lib/prisma";

export async function getHospitals() {
  return prisma.hospital.findMany({
    where: {
      status: "ACTIVE",
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getHospitalById(id) {
  return prisma.hospital.findUnique({
    where: {
      id,
    },
  });
}