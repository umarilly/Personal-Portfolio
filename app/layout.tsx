import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/Provider";

export const metadata: Metadata = {
  title: "Muhammad Umar",
  description: "The personal portfolio of Muhammad Umar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}