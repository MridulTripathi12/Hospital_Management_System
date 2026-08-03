export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      {children}
    </div>
  );
}