"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export default function DoctorFilters({
  status,
  setStatus,
}) {
  return (
    <Select
      value={status}
      onValueChange={setStatus}
    >
      <SelectTrigger className="w-52">
        <SelectValue placeholder="Status" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ALL">
          All Doctors
        </SelectItem>

        <SelectItem value="AVAILABLE">
          Available
        </SelectItem>

        <SelectItem value="BUSY">
          Busy
        </SelectItem>

        <SelectItem value="ON_LEAVE">
          On Leave
        </SelectItem>
      </SelectContent>
    </Select>
  );
}