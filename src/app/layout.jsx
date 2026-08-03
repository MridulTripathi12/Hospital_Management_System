import "./globals.css";
import { ThemeProvider } from "@/shared/components/providers/ThemeProvider";
import { Toaster } from "@/shared/ui/sonner";

export const metadata = {
  title: "Hospital Management System",
  description: "Multi Hospital SaaS HMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}