import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { hospitalCode, email, password } = body;

    // Validate required fields
    if (!hospitalCode || !email || !password) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Hospital code, email, and password are required' 
        },
        { status: 400 }
      );
    }

    // 1. Find the hospital by code
    const hospital = await prisma.hospital.findUnique({
      where: {
        code: hospitalCode,
      },
      select: {
        id: true,
        name: true,
        status: true,
      },
    });

    if (!hospital) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid hospital code' 
        },
        { status: 401 }
      );
    }

    // Check if hospital is active
    if (hospital.status !== 'ACTIVE') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Hospital is not active' 
        },
        { status: 401 }
      );
    }

    // 2. Find the user by hospitalId and email
    const user = await prisma.user.findUnique({
      where: {
        hospitalId_email: {
          hospitalId: hospital.id,
          email: email,
        },
      },
      include: {
        role: true,
        hospital: {
          select: {
            id: true,
            name: true,
            code: true,
          },
        },
        doctor: {
          include: {
            department: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email or password' 
        },
        { status: 401 }
      );
    }

    // Check if user is active
    if (user.status !== 'ACTIVE') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'User account is not active. Please contact administrator.' 
        },
        { status: 401 }
      );
    }

    // 3. Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email or password' 
        },
        { status: 401 }
      );
    }

    // 4. Update last login
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastLogin: new Date(),
      },
    });

    // 5. Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role.type,
        hospitalId: user.hospitalId,
        hospitalCode: user.hospital.code,
      },
      process.env.JWT_SECRET || 'your-secret-key-change-this',
      { expiresIn: '7d' }
    );

    // 6. Remove sensitive data from user object
    const { password: _, ...userWithoutPassword } = user;

    // 7. Return response
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      data: {
        user: userWithoutPassword,
        token,
      },
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred during login' 
      },
      { status: 500 }
    );
  }
}