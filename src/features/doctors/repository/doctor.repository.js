import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";

/**
 * Get All Doctors
 */
export async function getDoctors() {
  return prisma.doctor.findMany({
    include: {
      user: true,
      department: true,
      hospital: true,
      schedules: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

/**
 * Get Doctor By ID
 */
export async function getDoctorById(id) {
  return prisma.doctor.findUnique({
    where: { id },

    include: {
      user: true,
      department: true,
      hospital: true,
      schedules: true,
      appointments: {
        include: {
          patient: true,
        },
      },
    },
  });
}

/**
 * Create Doctor
 */
export async function createDoctor(data) {
  const role = await prisma.role.findUnique({
    where: {
      type: "DOCTOR",
    },
  });

  if (!role) {
    throw new Error("Doctor role not found.");
  }

  const existingUser =
    await prisma.user.findFirst({
      where: {
        hospitalId: data.hospitalId,
        email: data.email,
      },
    });

  if (existingUser) {
    throw new Error(
      "Email already exists."
    );
  }

  const hashedPassword =
    await hashPassword(
      data.password || "Doctor@123"
    );

  return prisma.$transaction(
    async (tx) => {
      const user =
        await tx.user.create({
          data: {
            hospitalId:
              data.hospitalId,

            roleId: role.id,

            firstName:
              data.firstName,

            lastName:
              data.lastName,

            email: data.email,

            phone: data.phone,

            password:
              hashedPassword,

            gender:
              data.gender,
          },
        });

      return tx.doctor.create({
        data: {
          userId: user.id,

          hospitalId:
            data.hospitalId,

          departmentId:
            data.departmentId,

          employeeId:
            data.employeeId,

          specialization:
            data.specialization,

          qualification:
            data.qualification,

          licenseNumber:
            data.licenseNumber,

          experience:
            Number(
              data.experience
            ),

          consultationFee:
            Number(
              data.consultationFee
            ),

          roomNumber:
            data.roomNumber,

          gender:
            data.gender,

          joiningDate:
            data.joiningDate
              ? new Date(
                  data.joiningDate
                )
              : null,

          phone:
            data.phone,

          alternatePhone:
            data.alternatePhone,

          address:
            data.address,

          city: data.city,

          state: data.state,

          country:
            data.country,

          zipCode:
            data.zipCode,

          bio: data.bio,

          languages:
            data.languages,

          status:
            data.status,
        },

        include: {
          user: true,
          department: true,
          hospital: true,
        },
      });
    }
  );
}

/**
 * Update Doctor
 */
export async function updateDoctor(
  id,
  data
) {
  const doctor =
    await prisma.doctor.findUnique({
      where: {
        id,
      },
    });

  if (!doctor) {
    throw new Error(
      "Doctor not found."
    );
  }

  return prisma.$transaction(
    async (tx) => {
      await tx.user.update({
        where: {
          id: doctor.userId,
        },

        data: {
          firstName:
            data.firstName,

          lastName:
            data.lastName,

          email: data.email,

          phone: data.phone,

          gender:
            data.gender,
        },
      });

      return tx.doctor.update({
        where: {
          id,
        },

        data: {
          departmentId:
            data.departmentId,

          employeeId:
            data.employeeId,

          specialization:
            data.specialization,

          qualification:
            data.qualification,

          licenseNumber:
            data.licenseNumber,

          experience:
            Number(
              data.experience
            ),

          consultationFee:
            Number(
              data.consultationFee
            ),

          roomNumber:
            data.roomNumber,

          status:
            data.status,

          bio: data.bio,

          languages:
            data.languages,

          phone:
            data.phone,

          alternatePhone:
            data.alternatePhone,

          address:
            data.address,

          city: data.city,

          state: data.state,

          country:
            data.country,

          zipCode:
            data.zipCode,
        },

        include: {
          user: true,
          department: true,
          hospital: true,
        },
      });
    }
  );
}

/**
 * Delete Doctor
 */
export async function deleteDoctor(
  id
) {
  const doctor =
    await prisma.doctor.findUnique({
      where: {
        id,
      },
    });

  if (!doctor) {
    throw new Error(
      "Doctor not found."
    );
  }

  return prisma.$transaction(
    async (tx) => {
      await tx.doctor.delete({
        where: {
          id,
        },
      });

      await tx.user.delete({
        where: {
          id: doctor.userId,
        },
      });

      return {
        success: true,
      };
    }
  );
}