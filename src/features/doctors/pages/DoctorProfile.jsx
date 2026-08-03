"use client";

import DoctorProfileHeader from "../profile/DoctorProfileHeader";
import DoctorInformation from "../profile/DoctorInformation";
import DoctorStats from "../profile/DoctorStats";

export default function DoctorProfile({
  doctor,
}) {
  return (
    <div className="space-y-6">
      <DoctorProfileHeader
        doctor={doctor}
      />

      <DoctorStats doctor={doctor} />

      <DoctorInformation
        doctor={doctor}
      />
    </div>
  );
}