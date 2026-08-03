import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>

      <p>Page Not Found</p>

      <Link
        href="/dashboard"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Go Dashboard
      </Link>
    </div>
  );
}