import { NextResponse } from "next/server";

import {
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "@/features/doctors/repository/doctor.repository";

/**
 * GET /api/doctors/:id
 */
export async function GET(
  request,
  { params }
) {
  try {
    const doctor =
      await getDoctorById(
        params.id
      );

    if (!doctor) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Doctor not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * PUT /api/doctors/:id
 */
export async function PUT(
  request,
  { params }
) {
  try {
    const body = await request.json();

    const doctor =
      await updateDoctor(
        params.id,
        body
      );

    return NextResponse.json({
      success: true,
      data: doctor,
      message:
        "Doctor updated successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 400,
      }
    );
  }
}

/**
 * DELETE /api/doctors/:id
 */
export async function DELETE(
  request,
  { params }
) {
  try {
    await deleteDoctor(params.id);

    return NextResponse.json({
      success: true,
      message:
        "Doctor deleted successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 400,
      }
    );
  }
}