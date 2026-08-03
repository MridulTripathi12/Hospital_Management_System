"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/shared/ui/select";

export default function AppointmentFilters({
  status,
  setStatus,
}) {
  return (
    <Select
      value={status}
      onValueChange={setStatus}
    >
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Status" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ALL">
          All Status
        </SelectItem>

        <SelectItem value="SCHEDULED">
          Scheduled
        </SelectItem>

        <SelectItem value="CONFIRMED">
          Confirmed
        </SelectItem>

        <SelectItem value="CHECKED_IN">
          Checked In
        </SelectItem>

        <SelectItem value="IN_PROGRESS">
          In Progress
        </SelectItem>

        <SelectItem value="COMPLETED">
          Completed
        </SelectItem>

        <SelectItem value="CANCELLED">
          Cancelled
        </SelectItem>

        <SelectItem value="NO_SHOW">
          No Show
        </SelectItem>
      </SelectContent>
    </Select>
  );
}