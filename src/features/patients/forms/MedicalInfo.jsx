"use client";

export default function MedicalInfo({
  register,
}) {
  return (
    <div className="rounded-xl border p-6 space-y-5">
      <h2 className="text-lg font-semibold">
        Medical Information
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Blood Group
          </label>

          <select
            {...register("bloodGroup")}
            className="w-full rounded-md border px-3 py-2"
          >
            <option value="">Select</option>

            <option value="A_POS">A+</option>
            <option value="A_NEG">A-</option>

            <option value="B_POS">B+</option>
            <option value="B_NEG">B-</option>

            <option value="AB_POS">AB+</option>
            <option value="AB_NEG">AB-</option>

            <option value="O_POS">O+</option>
            <option value="O_NEG">O-</option>
          </select>
        </div>
      </div>
    </div>
  );
}