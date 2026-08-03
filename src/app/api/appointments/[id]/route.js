import { NextResponse } from "next/server";

import {
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  completeAppointment,
  cancelAppointment,
} from "@/features/appointments/repository/appointment.repository";

/**
 * GET /api/appointments/:id
 */
export async function GET(_, { params }) {
  try {
    const appointment =
      await getAppointmentById(
        params.id
      );

    if (!appointment) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Appointment not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * PUT /api/appointments/:id
 */
export async function PUT(
  request,
  { params }
) {
  try {
    const body = await request.json();

    let appointment;

    if (body.action === "complete") {
      appointment =
        await completeAppointment(
          params.id
        );
    } else if (
      body.action === "cancel"
    ) {
      appointment =
        await cancelAppointment(
          params.id
        );
    } else {
      appointment =
        await updateAppointment(
          params.id,
          body
        );
    }

    return NextResponse.json({
      success: true,
      message:
        "Appointment updated successfully.",
      data: appointment,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Update failed.",
      },
      {
        status: 400,
      }
    );
  }
}

/**
 * DELETE /api/appointments/:id
 */
export async function DELETE(
  _,
  { params }
) {
  try {
    await deleteAppointment(
      params.id
    );

    return NextResponse.json({
      success: true,
      message:
        "Appointment deleted successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Delete failed.",
      },
      {
        status: 400,
      }
    );
  }
}