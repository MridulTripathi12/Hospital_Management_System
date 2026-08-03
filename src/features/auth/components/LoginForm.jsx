"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/features/auth/validations/login.schema";
import { loginUser } from "@/features/auth/services/auth.service";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import {
  Loader2,
  Lock,
  Mail,
  Building2,
  ShieldPlus,
} from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      hospitalCode: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    try {
      setLoading(true);
      setError("");

      await loginUser(data);

      router.replace("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md border-0 shadow-2xl">
      <CardHeader className="space-y-3 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
          <ShieldPlus className="h-7 w-7" />
        </div>

        <CardTitle className="text-3xl font-bold">
          Hospital Management
        </CardTitle>

        <CardDescription>
          Sign in to continue to your dashboard
        </CardDescription>
      </CardHeader>

      <CardContent>
        {error && (
          <div className="mb-5 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Hospital Code */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Hospital Code
            </label>

            <div className="relative">
              <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

              <Input
                type="text"
                placeholder="HMS001"
                autoComplete="off"
                className="pl-10"
                {...register("hospitalCode")}
              />
            </div>

            {errors.hospitalCode && (
              <p className="text-sm text-red-500">
                {errors.hospitalCode.message}
              </p>
            )}
          </div>

          {/* Email */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

              <Input
                type="email"
                placeholder="doctor@hospital.com"
                autoComplete="email"
                className="pl-10"
                {...register("email")}
              />
            </div>

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

              <Input
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                className="pl-10"
                {...register("password")}
              />
            </div>

            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />

              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}

            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}