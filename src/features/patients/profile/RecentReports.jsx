"use client";

import Link from "next/link";

import {
  FlaskConical,
  ArrowRight,
  Download,
  FileCheck2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

const reports = [
  {
    id: 1,
    test: "Complete Blood Count",
    date: "30 Jul 2026",
    doctor: "Dr. Amit Sharma",
    status: "Completed",
  },
  {
    id: 2,
    test: "Blood Sugar",
    date: "22 Jul 2026",
    doctor: "Dr. Raj Mehta",
    status: "Completed",
  },
  {
    id: 3,
    test: "Liver Function Test",
    date: "15 Jul 2026",
    doctor: "Dr. Priya Singh",
    status: "Pending",
  },
];

function StatusBadge({ status }) {
  switch (status) {
    case "Completed":
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          Completed
        </Badge>
      );

    case "Pending":
      return (
        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          Pending
        </Badge>
      );

    default:
      return (
        <Badge variant="secondary">
          {status}
        </Badge>
      );
  }
}

export default function RecentReports() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          Recent Lab Reports
        </CardTitle>

        <FlaskConical className="h-5 w-5 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left">
                  Test
                </th>

                <th className="px-4 py-3 text-left">
                  Date
                </th>

                <th className="px-4 py-3 text-left">
                  Requested By
                </th>

                <th className="px-4 py-3 text-left">
                  Status
                </th>

                <th className="px-4 py-3 text-center">
                  Report
                </th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="border-b hover:bg-muted/30"
                >
                  <td className="px-4 py-4 font-medium">
                    {report.test}
                  </td>

                  <td className="px-4 py-4">
                    {report.date}
                  </td>

                  <td className="px-4 py-4">
                    {report.doctor}
                  </td>

                  <td className="px-4 py-4">
                    <StatusBadge
                      status={report.status}
                    />
                  </td>

                  <td className="px-4 py-4 text-center">
                    {report.status === "Completed" ? (
                      <Button
                        size="icon"
                        variant="ghost"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    ) : (
                      <FileCheck2 className="mx-auto h-4 w-4 text-muted-foreground" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex justify-end">
          <Link href="/laboratory">
            <Button variant="outline">
              View All

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}