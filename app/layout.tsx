import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spinny Assignment",
  description: "Front-end internship assignment – car detail page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="app-header">
          <div className="logo">Spinny Clone</div>
          <nav className="nav">
            <span>Buy car</span>
            <span>Sell car</span>
            <span>Service</span>
          </nav>
        </header>
        <main className="app-main">{children}</main>
      </body>
    </html>
  );
}
