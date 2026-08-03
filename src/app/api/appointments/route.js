import { NextResponse } from "next/server";

import {
  getAppointments,
  getTodayAppointments,
  getDoctorAppointments,
  getPatientAppointments,
  createAppointment,
} from "@/features/appointments/repository/appointment.repository";

/**
 * GET /api/appointments
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const today = searchParams.get("today");
    const doctorId = searchParams.get("doctorId");
    const patientId = searchParams.get("patientId");

    let data;

    if (today === "true") {
      data = await getTodayAppointments();
    } else if (doctorId) {
      data = await getDoctorAppointments(
        doctorId
      );
    } else if (patientId) {
      data = await getPatientAppointments(
        patientId
      );
    } else {
      data = await getAppointments();
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Failed to fetch appointments.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * POST /api/appointments
 */
export async function POST(request) {
  try {
    const body = await request.json();

    const appointment =
      await createAppointment(body);

    return NextResponse.json(
      {
        success: true,
        message:
          "Appointment created successfully.",
        data: appointment,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 400,
      }
    );
  }
}