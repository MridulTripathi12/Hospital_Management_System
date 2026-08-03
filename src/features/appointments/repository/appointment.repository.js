import { prisma } from "@/lib/prisma";

/**
 * Get All Appointments
 */
export async function getAppointments() {
  return prisma.appointment.findMany({
    include: {
      hospital: true,

      patient: true,

      doctor: {
        include: {
          user: true,
          department: true,
        },
      },

      invoice: true,
    },

    orderBy: {
      appointmentDate: "desc",
    },
  });
}

/**
 * Get Appointment By ID
 */
export async function getAppointmentById(id) {
  return prisma.appointment.findUnique({
    where: {
      id,
    },

    include: {
      hospital: true,

      patient: true,

      doctor: {
        include: {
          user: true,
          department: true,
        },
      },

      invoice: true,
    },
  });
}

/**
 * Today's Appointments
 */
export async function getTodayAppointments() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return prisma.appointment.findMany({
    where: {
      appointmentDate: {
        gte: start,
        lte: end,
      },
    },

    include: {
      patient: true,

      doctor: {
        include: {
          user: true,
          department: true,
        },
      },
    },

    orderBy: {
      appointmentTime: "asc",
    },
  });
}

/**
 * Get Doctor Appointments
 */
export async function getDoctorAppointments(doctorId) {
  return prisma.appointment.findMany({
    where: {
      doctorId,
    },

    include: {
      patient: true,

      doctor: {
        include: {
          user: true,
          department: true,
        },
      },
    },

    orderBy: {
      appointmentDate: "desc",
    },
  });
}

/**
 * Get Patient Appointments
 */
export async function getPatientAppointments(patientId) {
  return prisma.appointment.findMany({
    where: {
      patientId,
    },

    include: {
      patient: true,

      doctor: {
        include: {
          user: true,
          department: true,
        },
      },
    },

    orderBy: {
      appointmentDate: "desc",
    },
  });
}

/**
 * Check Doctor Availability
 */
export async function checkDoctorAvailability({
  doctorId,
  appointmentDate,
  appointmentTime,
}) {
  const appointment =
    await prisma.appointment.findFirst({
      where: {
        doctorId,

        appointmentDate: new Date(
          appointmentDate
        ),

        appointmentTime,

        status: {
          not: "CANCELLED",
        },
      },
    });

  return !appointment;
}

/**
 * Generate Queue Number
 */
export async function generateQueueNumber(
  doctorId,
  appointmentDate
) {
  const count =
    await prisma.appointment.count({
      where: {
        doctorId,

        appointmentDate: new Date(
          appointmentDate
        ),
      },
    });

  return count + 1;
}

/**
 * Create Appointment
 */
export async function createAppointment(data) {
  const available =
    await checkDoctorAvailability({
      doctorId: data.doctorId,
      appointmentDate:
        data.appointmentDate,
      appointmentTime:
        data.appointmentTime,
    });

  if (!available) {
    throw new Error(
      "Doctor is not available at this time."
    );
  }

  const queueNumber =
    await generateQueueNumber(
      data.doctorId,
      data.appointmentDate
    );

  return prisma.appointment.create({
    data: {
      ...data,

      appointmentDate: new Date(
        data.appointmentDate
      ),

      queueNumber,
    },

    include: {
      patient: true,

      doctor: {
        include: {
          user: true,
          department: true,
        },
      },

      invoice: true,
    },
  });
}

/**
 * Update Appointment
 */
export async function updateAppointment(
  id,
  data
) {
  return prisma.appointment.update({
    where: {
      id,
    },

    data: {
      ...data,

      appointmentDate:
        data.appointmentDate
          ? new Date(
              data.appointmentDate
            )
          : undefined,
    },

    include: {
      patient: true,

      doctor: {
        include: {
          user: true,
          department: true,
        },
      },

      invoice: true,
    },
  });
}

/**
 * Complete Appointment
 */
export async function completeAppointment(
  id
) {
  return prisma.appointment.update({
    where: {
      id,
    },

    data: {
      status: "COMPLETED",

      completedAt: new Date(),
    },
  });
}

/**
 * Cancel Appointment
 */
export async function cancelAppointment(
  id
) {
  return prisma.appointment.update({
    where: {
      id,
    },

    data: {
      status: "CANCELLED",
    },
  });
}

/**
 * Delete Appointment
 */
export async function deleteAppointment(
  id
) {
  return prisma.appointment.delete({
    where: {
      id,
    },
  });
}