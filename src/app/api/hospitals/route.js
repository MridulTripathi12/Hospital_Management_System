import { NextResponse } from "next/server";
import { getHospitals } from "@/features/hospitals/repository/hospital.repository";

export async function GET() {
  try {
    const hospitals = await getHospitals();

    return NextResponse.json({
      success: true,
      data: hospitals,
    });
  } catch (error) {
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