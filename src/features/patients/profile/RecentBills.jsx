"use client";

import Link from "next/link";

import {
  Receipt,
  ArrowRight,
  Eye,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";

const bills = [
  {
    id: 1,
    invoice: "INV-1001",
    date: "01 Aug 2026",
    amount: "₹2,500",
    status: "Paid",
  },
  {
    id: 2,
    invoice: "INV-0995",
    date: "22 Jul 2026",
    amount: "₹1,750",
    status: "Pending",
  },
  {
    id: 3,
    invoice: "INV-0987",
    date: "10 Jul 2026",
    amount: "₹4,800",
    status: "Paid",
  },
];

function PaymentBadge({ status }) {
  switch (status) {
    case "Paid":
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          Paid
        </Badge>
      );

    case "Pending":
      return (
        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
          Pending
        </Badge>
      );

    case "Failed":
      return (
        <Badge variant="destructive">
          Failed
        </Badge>
      );

    default:
      return <Badge>{status}</Badge>;
  }
}

export default function RecentBills() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          Recent Bills
        </CardTitle>

        <Receipt className="h-5 w-5 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left">
                  Invoice
                </th>

                <th className="px-4 py-3 text-left">
                  Date
                </th>

                <th className="px-4 py-3 text-left">
                  Amount
                </th>

                <th className="px-4 py-3 text-left">
                  Status
                </th>

                <th className="px-4 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {bills.map((bill) => (
                <tr
                  key={bill.id}
                  className="border-b hover:bg-muted/30"
                >
                  <td className="px-4 py-4 font-medium">
                    {bill.invoice}
                  </td>

                  <td className="px-4 py-4">
                    {bill.date}
                  </td>

                  <td className="px-4 py-4 font-semibold">
                    {bill.amount}
                  </td>

                  <td className="px-4 py-4">
                    <PaymentBadge
                      status={bill.status}
                    />
                  </td>

                  <td className="px-4 py-4 text-center">
                    <Button
                      size="icon"
                      variant="ghost"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex justify-end">
          <Link href="/billing">
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