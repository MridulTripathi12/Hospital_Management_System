"use client";

import PatientProfileHeader from "../profile/PatientProfileHeader";
import PatientSummaryCards from "../profile/PatientSummaryCards";
import PatientInformation from "../profile/PatientInformation";
import MedicalInformation from "../profile/MedicalInformation";
import EmergencyInformation from "../profile/EmergencyInformation";
import RecentAppointments from "../profile/RecentAppointments";
import RecentBills from "../profile/RecentBills";
import RecentReports from "../profile/RecentReports";
import PatientTimeline from "../profile/PatientTimeline";

export default function PatientProfile() {
  // Temporary Dummy Data
  // Later this will come from API using patient ID

  const patient = {
    id: "1",
    patientId: "PAT-1001",

    firstName: "Rahul",
    lastName: "Sharma",

    age: 28,
    gender: "Male",

    bloodGroup: "B_POS",

    phone: "9876543210",
    email: "rahul@gmail.com",

    address: "New Delhi, India",

    createdAt: new Date(),

    emergencyContact: "9876543211",

    emergencyName: "Rakesh Sharma",

    relationship: "Brother",

    emergencyAddress: "Delhi, India",

    emergencyNotes: "Diabetic Patient",

    allergies: "Penicillin",

    medications: "Paracetamol",

    diseases: "Diabetes",

    height: 175,

    weight: 74,

    bloodPressure: "120 / 80",

    notes: "Patient recovering well.",
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <PatientProfileHeader
        patient={patient}
      />

      {/* Summary */}

      <PatientSummaryCards />

      {/* Information */}

      <div className="grid gap-6 lg:grid-cols-2">
        <PatientInformation
          patient={patient}
        />

        <MedicalInformation
          patient={patient}
        />
      </div>

      {/* Emergency + Timeline */}

      <div className="grid gap-6 lg:grid-cols-2">
        <EmergencyInformation
          patient={patient}
        />

        <PatientTimeline />
      </div>

      {/* Recent Appointments */}

      <RecentAppointments />

      {/* Bills */}

      <RecentBills />

      {/* Reports */}

      <RecentReports />
    </div>
  );
}