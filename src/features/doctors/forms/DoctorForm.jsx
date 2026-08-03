"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import {
  createDoctor,
  updateDoctor,
} from "../services/doctor.service";

import { doctorSchema } from "../validations/doctor.schema";

export default function DoctorForm({
  initialData = null,
}) {
  const router = useRouter();

  const isEdit = !!initialData;

  const [loading, setLoading] =
    useState(false);

  const [departments, setDepartments] =
    useState([]);

  const [hospitals, setHospitals] =
    useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      doctorSchema
    ),

    defaultValues:
      initialData || {
        status: "AVAILABLE",
      },
  });

  useEffect(() => {
    async function loadData() {
      const deptRes =
        await fetch("/api/departments");

      const deptJson =
        await deptRes.json();

      setDepartments(
        deptJson.data || []
      );

      const hospitalRes =
        await fetch("/api/hospitals");

      const hospitalJson =
        await hospitalRes.json();

      setHospitals(
        hospitalJson.data || []
      );
    }

    loadData();
  }, []);

  async function onSubmit(data) {
    try {
      setLoading(true);

      if (isEdit) {
        await updateDoctor(
          initialData.id,
          data
        );

        toast.success(
          "Doctor updated successfully."
        );
      } else {
        await createDoctor(data);

        toast.success(
          "Doctor created successfully."
        );

        reset();
      }

      router.push("/doctors");
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <Card>
  <CardHeader>
    <CardTitle>
      Personal Information
    </CardTitle>
  </CardHeader>

  <CardContent className="grid gap-5 md:grid-cols-2">

    <div>
      <Label>First Name</Label>

      <Input
        {...register("firstName")}
      />

      <p className="text-red-500 text-sm">
        {errors.firstName?.message}
      </p>
    </div>

    <div>
      <Label>Last Name</Label>

      <Input
        {...register("lastName")}
      />

      <p className="text-red-500 text-sm">
        {errors.lastName?.message}
      </p>
    </div>

    <div>
      <Label>Email</Label>

      <Input
        type="email"
        {...register("email")}
      />
    </div>

    <div>
      <Label>Phone</Label>

      <Input
        {...register("phone")}
      />
    </div>

  </CardContent>
</Card>
<Card>

<CardHeader>

<CardTitle>

Organization

</CardTitle>

</CardHeader>

<CardContent className="grid gap-5 md:grid-cols-2">

<div>

<Label>

Hospital

</Label>

<Select
value={watch("hospitalId")}
onValueChange={(v)=>
setValue("hospitalId",v)
}
>

<SelectTrigger>

<SelectValue />

</SelectTrigger>

<SelectContent>

{hospitals.map((hospital)=>(

<SelectItem
key={hospital.id}
value={hospital.id}
>

{hospital.name}

</SelectItem>

))}

</SelectContent>

</Select>

</div>

<div>

<Label>

Department

</Label>

<Select
value={watch("departmentId")}
onValueChange={(v)=>
setValue("departmentId",v)
}
>

<SelectTrigger>

<SelectValue />

</SelectTrigger>

<SelectContent>

{departments.map((department)=>(

<SelectItem
key={department.id}
value={department.id}
>

{department.name}

</SelectItem>

))}

</SelectContent>

</Select>

</div>

</CardContent>

</Card>
<Card>
  <CardHeader>
    <CardTitle>
      Professional Information
    </CardTitle>
  </CardHeader>

  <CardContent className="grid gap-5 md:grid-cols-2">

    <div>
      <Label>Employee ID</Label>
      <Input {...register("employeeId")} />
    </div>

    <div>
      <Label>License Number</Label>
      <Input {...register("licenseNumber")} />
    </div>

    <div>
      <Label>Specialization</Label>
      <Input {...register("specialization")} />

      <p className="text-sm text-red-500">
        {errors.specialization?.message}
      </p>
    </div>

    <div>
      <Label>Qualification</Label>
      <Input {...register("qualification")} />

      <p className="text-sm text-red-500">
        {errors.qualification?.message}
      </p>
    </div>

    <div>
      <Label>Experience (Years)</Label>
      <Input
        type="number"
        {...register("experience")}
      />

      <p className="text-sm text-red-500">
        {errors.experience?.message}
      </p>
    </div>

    <div>
      <Label>Consultation Fee</Label>
      <Input
        type="number"
        {...register("consultationFee")}
      />

      <p className="text-sm text-red-500">
        {errors.consultationFee?.message}
      </p>
    </div>

    <div>
      <Label>Room Number</Label>
      <Input {...register("roomNumber")} />
    </div>

    <div>
      <Label>Joining Date</Label>
      <Input
        type="date"
        {...register("joiningDate")}
      />
    </div>

  </CardContent>
</Card>
<Card>

<CardHeader>

<CardTitle>

Contact Information

</CardTitle>

</CardHeader>

<CardContent className="grid gap-5 md:grid-cols-2">

<div>

<Label>Alternate Phone</Label>

<Input
{...register("alternatePhone")}
/>

</div>

<div>

<Label>Address</Label>

<Input
{...register("address")}
/>

</div>

<div>

<Label>City</Label>

<Input
{...register("city")}
/>

</div>

<div>

<Label>State</Label>

<Input
{...register("state")}
/>

</div>

<div>

<Label>Country</Label>

<Input
{...register("country")}
/>

</div>

<div>

<Label>Zip Code</Label>

<Input
{...register("zipCode")}
/>

</div>

</CardContent>

</Card>
<Card>

<CardHeader>

<CardTitle>

Profile

</CardTitle>

</CardHeader>

<CardContent className="space-y-5">

<div>

<Label>Bio</Label>

<Textarea
rows={5}
{...register("bio")}
/>

</div>

<div>

<Label>Languages</Label>

<Input
placeholder="English,Hindi"
{...register("languages")}
/>

</div>

</CardContent>

</Card>
<Card>

<CardHeader>

<CardTitle>

Status

</CardTitle>

</CardHeader>

<CardContent className="grid gap-5 md:grid-cols-2">

<div>

<Label>Gender</Label>

<Select
value={watch("gender")}
onValueChange={(v)=>setValue("gender",v)}
>

<SelectTrigger>

<SelectValue/>

</SelectTrigger>

<SelectContent>

<SelectItem value="MALE">
Male
</SelectItem>

<SelectItem value="FEMALE">
Female
</SelectItem>

<SelectItem value="OTHER">
Other
</SelectItem>

</SelectContent>

</Select>

</div>

<div>

<Label>Status</Label>

<Select
value={watch("status")}
onValueChange={(v)=>setValue("status",v)}
>

<SelectTrigger>

<SelectValue/>

</SelectTrigger>

<SelectContent>

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

</div>

</CardContent>

</Card>
<div className="flex justify-end">

<Button
type="submit"
disabled={loading}
size="lg"
>

{loading
? "Saving..."
: isEdit
? "Update Doctor"
: "Create Doctor"}

</Button>

</div>

</form>
);
}