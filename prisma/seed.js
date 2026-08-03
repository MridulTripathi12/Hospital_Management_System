import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create Hospital
  const hospital = await prisma.hospital.upsert({
    where: { code: 'HMT001' },
    update: {},
    create: {
      name: 'HMT Hospital',
      code: 'HMT001',
      email: 'info@hmthospital.com',
      phone: '1234567890',
      city: 'New Delhi',
      state: 'Delhi',
      country: 'India',
      zipCode: '110001',
      status: 'ACTIVE',
    },
  });

  // Create Roles
  const superAdminRole = await prisma.role.upsert({
    where: { type: 'SUPER_ADMIN' },
    update: {},
    create: {
      name: 'Super Admin',
      type: 'SUPER_ADMIN',
      description: 'Super Administrator',
    },
  });

  const adminRole = await prisma.role.upsert({
    where: { type: 'HOSPITAL_ADMIN' },
    update: {},
    create: {
      name: 'Hospital Admin',
      type: 'HOSPITAL_ADMIN',
      description: 'Hospital Administrator',
    },
  });

  const doctorRole = await prisma.role.upsert({
    where: { type: 'DOCTOR' },
    update: {},
    create: {
      name: 'Doctor',
      type: 'DOCTOR',
      description: 'Doctor',
    },
  });

  // Create Super Admin User
  const hashedPassword = await bcrypt.hash('Admin@123', 10);
  
  const adminUser = await prisma.user.upsert({
    where: {
      hospitalId_email: {
        hospitalId: hospital.id,
        email: 'admin@hmthospital.com',
      },
    },
    update: {},
    create: {
      firstName: 'Super',
      lastName: 'Admin',
      email: 'admin@hmthospital.com',
      password: hashedPassword,
      phone: '9876543210',
      gender: 'MALE',
      status: 'ACTIVE',
      emailVerified: true,
      hospitalId: hospital.id,
      roleId: superAdminRole.id,
    },
  });

  console.log('Seed completed successfully!');
  console.log('Hospital:', hospital.name);
  console.log('Admin user created:', adminUser.email);
  console.log('Password: Admin@123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });