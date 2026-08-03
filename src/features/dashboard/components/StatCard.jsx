import { Card, CardContent } from "@/shared/ui/card";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-blue-500",
}) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl text-white ${color}`}
        >
          <Icon size={28} />
        </div>
      </CardContent>
    </Card>
  );
}