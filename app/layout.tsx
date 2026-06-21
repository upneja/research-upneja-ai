import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeurIPS 2026 Forecast — the ML frontier, before it arrives",
  description:
    "A data-grounded forecast of the novel concepts that will define NeurIPS 2026, with an interactive map of the ML research landscape.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
