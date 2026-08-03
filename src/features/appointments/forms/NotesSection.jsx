"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/shared/ui/card";

export default function NotesSection({
  register,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notes</CardTitle>
      </CardHeader>

      <CardContent>
        <textarea
          rows={5}
          {...register("notes")}
          className="w-full rounded-md border p-3"
          placeholder="Additional Notes..."
        />
      </CardContent>
    </Card>
  );
}