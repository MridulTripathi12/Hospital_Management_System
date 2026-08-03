"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

const patientData = [
  { month: "Jan", patients: 420 },
  { month: "Feb", patients: 510 },
  { month: "Mar", patients: 610 },
  { month: "Apr", patients: 740 },
  { month: "May", patients: 860 },
  { month: "Jun", patients: 980 },
];

const revenueData = [
  { month: "Jan", revenue: 2.4 },
  { month: "Feb", revenue: 3.1 },
  { month: "Mar", revenue: 4.0 },
  { month: "Apr", revenue: 5.2 },
  { month: "May", revenue: 6.3 },
  { month: "Jun", revenue: 7.4 },
];

export default function DashboardCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Patient Growth</CardTitle>
        </CardHeader>

        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={patientData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="patients"
                stroke="#2563eb"
                fill="#93c5fd"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue (₹ Lakhs)</CardTitle>
        </CardHeader>

        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                fill="#86efac"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}