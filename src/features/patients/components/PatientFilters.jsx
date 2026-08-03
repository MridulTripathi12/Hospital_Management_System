"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import { Button } from "@/shared/ui/button";
import { RotateCcw } from "lucide-react";

export default function PatientFilters({
  gender,
  bloodGroup,
  status,
  onGenderChange,
  onBloodGroupChange,
  onStatusChange,
  onReset,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Gender */}
      <Select value={gender} onValueChange={onGenderChange}>
        <SelectTrigger className="w-[170px]">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All Gender</SelectItem>
          <SelectItem value="MALE">Male</SelectItem>
          <SelectItem value="FEMALE">Female</SelectItem>
          <SelectItem value="OTHER">Other</SelectItem>
        </SelectContent>
      </Select>

      {/* Blood Group */}
      <Select
        value={bloodGroup}
        onValueChange={onBloodGroupChange}
      >
        <SelectTrigger className="w-[170px]">
          <SelectValue placeholder="Blood Group" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All Blood Groups</SelectItem>
          <SelectItem value="A_POSITIVE">A+</SelectItem>
          <SelectItem value="A_NEGATIVE">A-</SelectItem>
          <SelectItem value="B_POSITIVE">B+</SelectItem>
          <SelectItem value="B_NEGATIVE">B-</SelectItem>
          <SelectItem value="AB_POSITIVE">AB+</SelectItem>
          <SelectItem value="AB_NEGATIVE">AB-</SelectItem>
          <SelectItem value="O_POSITIVE">O+</SelectItem>
          <SelectItem value="O_NEGATIVE">O-</SelectItem>
        </SelectContent>
      </Select>

      {/* Status */}
      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="w-[170px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ALL">All Status</SelectItem>
          <SelectItem value="ACTIVE">Active</SelectItem>
          <SelectItem value="INACTIVE">Inactive</SelectItem>
        </SelectContent>
      </Select>

      {/* Reset Button */}
      <Button
        variant="outline"
        onClick={onReset}
        className="gap-2"
      >
        <RotateCcw className="h-4 w-4" />
        Reset
      </Button>
    </div>
  );
}