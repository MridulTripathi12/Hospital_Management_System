"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";

export default function ContactInfo({
  register,
  errors,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Contact Information
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Alternate Phone
          </label>

          <Input
            {...register("alternatePhone")}
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Address
          </label>

          <Input
            {...register("address")}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            City
          </label>

          <Input {...register("city")} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            State
          </label>

          <Input {...register("state")} />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Country
          </label>

          <Input
            {...register("country")}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Zip Code
          </label>

          <Input
            {...register("zipCode")}
          />
        </div>
      </CardContent>
    </Card>
  );
}