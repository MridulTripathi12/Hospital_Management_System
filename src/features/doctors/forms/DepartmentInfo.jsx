import {
  DOCTOR_DEPARTMENTS,
} from "../constants/doctor.constants";

export default function DepartmentInfo({
  register,
}) {
  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Department
      </h2>

      <select
        {...register("department")}
        className="w-full rounded-lg border p-3"
      >
        <option value="">
          Select Department
        </option>

        {DOCTOR_DEPARTMENTS.map((department) => (
          <option
            key={department}
            value={department}
          >
            {department}
          </option>
        ))}

      </select>

    </div>
  );
}