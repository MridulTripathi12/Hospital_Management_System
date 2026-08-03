import { NextResponse } from "next/server";

import {
  getDoctors,
  createDoctor,
} from "@/features/doctors/repository/doctor.repository";

/**
 * GET /api/doctors
 */
export async function GET() {
  try {
    const doctors = await getDoctors();

    return NextResponse.json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Failed to fetch doctors.",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * POST /api/doctors
 */
export async function POST(request) {
  try {
    const body = await request.json();

    const doctor =
      await createDoctor(body);

    return NextResponse.json(
      {
        success: true,
        data: doctor,
        message:
          "Doctor created successfully.",
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
        message:
          error.message ||
          "Failed to create doctor.",
      },
      {
        status: 400,
      }
    );
  }
}