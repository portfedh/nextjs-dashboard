// Root layout for the project
// Shared for all pages in the application

import { Metadata } from "next";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

// General metadata for the application
export const metadata: Metadata = {
  title: {
    template: "%s | S2G Energy",
    default: "S2G Energy",
  },
  description: "S2G Energy dashboard.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
