"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";

export default function PersonalInfo({
  register,
  errors,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Personal Information
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-5 md:grid-cols-2">
        {/* First Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            First Name
          </label>

          <Input
            {...register("firstName")}
          />

          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Last Name
          </label>

          <Input
            {...register("lastName")}
          />

          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <Input
            type="email"
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone
          </label>

          <Input
            {...register("phone")}
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Gender */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Gender
          </label>

          <select
            {...register("gender")}
            className="w-full rounded-md border p-2"
          >
            <option value="">
              Select Gender
            </option>

            <option value="MALE">
              Male
            </option>

            <option value="FEMALE">
              Female
            </option>

            <option value="OTHER">
              Other
            </option>
          </select>
        </div>

        {/* DOB */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Date of Birth
          </label>

          <Input
            type="date"
            {...register("dateOfBirth")}
          />
        </div>
      </CardContent>
    </Card>
  );
}