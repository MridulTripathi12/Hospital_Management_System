import { prisma } from "@/lib/prisma";

export async function getDepartments() {
  return prisma.department.findMany({
    where: {
      isActive: true,
    },
    include: {
      hospital: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getDepartmentById(id) {
  return prisma.department.findUnique({
    where: { id },
    include: {
      hospital: true,
      doctors: true,
    },
  });
}