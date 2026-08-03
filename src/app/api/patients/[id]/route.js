import { NextResponse } from "next/server";

import {
  getPatients,
  createPatient,
} from "@/features/patients/repository/patient.repository";

export async function GET() {
  try {
    const patients = await getPatients();

    return NextResponse.json({
      success: true,
      data: patients,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch patients",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const patient = await createPatient(body);

    return NextResponse.json(
      {
        success: true,
        message: "Patient created successfully.",
        data: patient,
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
        status: 500,
      }
    );
  }
}