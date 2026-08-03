"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";

export default function ProfessionalInfo({
  register,
  errors,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Professional Information
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-5 md:grid-cols-2">
        {/* Employee ID */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Employee ID
          </label>

          <Input {...register("employeeId")} />

          {errors.employeeId && (
            <p className="mt-1 text-sm text-red-500">
              {errors.employeeId.message}
            </p>
          )}
        </div>

        {/* Department */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Department
          </label>

          <Input {...register("department")} />

          {errors.department && (
            <p className="mt-1 text-sm text-red-500">
              {errors.department.message}
            </p>
          )}
        </div>

        {/* Specialization */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Specialization
          </label>

          <Input
            {...register("specialization")}
          />

          {errors.specialization && (
            <p className="mt-1 text-sm text-red-500">
              {errors.specialization.message}
            </p>
          )}
        </div>

        {/* Qualification */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Qualification
          </label>

          <Input
            {...register("qualification")}
          />

          {errors.qualification && (
            <p className="mt-1 text-sm text-red-500">
              {errors.qualification.message}
            </p>
          )}
        </div>

        {/* License */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            License Number
          </label>

          <Input
            {...register("licenseNumber")}
          />

          {errors.licenseNumber && (
            <p className="mt-1 text-sm text-red-500">
              {errors.licenseNumber.message}
            </p>
          )}
        </div>

        {/* Experience */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Experience (Years)
          </label>

          <Input
            type="number"
            {...register("experience")}
          />

          {errors.experience && (
            <p className="mt-1 text-sm text-red-500">
              {errors.experience.message}
            </p>
          )}
        </div>

        {/* Fee */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Consultation Fee
          </label>

          <Input
            type="number"
            {...register("consultationFee")}
          />

          {errors.consultationFee && (
            <p className="mt-1 text-sm text-red-500">
              {errors.consultationFee.message}
            </p>
          )}
        </div>

        {/* Room */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Room Number
          </label>

          <Input
            {...register("roomNumber")}
          />

          {errors.roomNumber && (
            <p className="mt-1 text-sm text-red-500">
              {errors.roomNumber.message}
            </p>
          )}
        </div>

        {/* Joining Date */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Joining Date
          </label>

          <Input
            type="date"
            {...register("joiningDate")}
          />
        </div>
      </CardContent>
    </Card>
  );
}