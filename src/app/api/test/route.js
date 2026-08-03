import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const patientCount = await prisma.patient.count();

    return NextResponse.json({
      success: true,
      message: "Prisma connected successfully!",
      patientCount,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}