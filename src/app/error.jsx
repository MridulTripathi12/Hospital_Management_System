"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Something went wrong</h1>

      <p className="text-gray-500">
        {error?.message}
      </p>

      <button
        onClick={reset}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}