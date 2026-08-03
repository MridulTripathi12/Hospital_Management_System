"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";

export default function ScheduleInfo({
  register,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Working Schedule
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Working Days
          </label>

          <Input
            placeholder="Mon-Fri"
            {...register("workingDays")}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Start Time
          </label>

          <Input
            type="time"
            {...register("startTime")}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            End Time
          </label>

          <Input
            type="time"
            {...register("endTime")}
          />
        </div>
      </CardContent>
    </Card>
  );
}