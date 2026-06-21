import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forecasting the research frontier · a pre-registered NeurIPS 2026 experiment",
  description:
    "In June 2026 a frontier model (Opus 4.8) predicted ten novel concepts that will be prominent at NeurIPS 2026, each with a falsifiable December test. A pre-registered test of machine research foresight, with an interactive map of the ML research landscape.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,400;9..144,0,600;9..144,1,400;9..144,1,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
