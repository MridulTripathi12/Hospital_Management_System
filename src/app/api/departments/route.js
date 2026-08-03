import { NextResponse } from "next/server";
import { getDepartments } from "@/features/departments/repository/department.repository";

export async function GET() {
  try {
    const departments = await getDepartments();

    return NextResponse.json({
      success: true,
      data: departments,
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