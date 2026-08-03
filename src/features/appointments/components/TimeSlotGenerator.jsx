"use client";

import { useMemo } from "react";

export default function TimeSlotGenerator({
  start = "09:00",
  end = "17:00",
  duration = 15,
  bookedSlots = [],
  onSelect,
}) {
  const slots = useMemo(() => {
    const result = [];

    let current = new Date(
      `2025-01-01T${start}:00`
    );

    const finish = new Date(
      `2025-01-01T${end}:00`
    );

    while (current < finish) {
      const time = current
        .toTimeString()
        .slice(0, 5);

      result.push(time);

      current.setMinutes(
        current.getMinutes() +
          duration
      );
    }

    return result;
  }, [start, end, duration]);

  return (
    <div className="grid grid-cols-4 gap-3">

      {slots.map((slot) => {
        const booked =
          bookedSlots.includes(slot);

        return (
          <button
            key={slot}
            disabled={booked}
            onClick={() =>
              onSelect(slot)
            }
            className={`rounded-lg border p-3 transition

            ${
              booked
                ? "bg-red-100 cursor-not-allowed"
                : "hover:bg-blue-100"
            }`}
          >
            {slot}
          </button>
        );
      })}

    </div>
  );
}