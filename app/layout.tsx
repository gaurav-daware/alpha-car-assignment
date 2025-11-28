import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spinny - Used Car Detail",
  description: "Buy certified used cars with warranty and assured quality",
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
          <div className="logo">Spinny</div>
          <nav className="nav">
            <span>Buy Car</span>
            <span>Sell Car</span>
            <span>Service</span>
          </nav>
        </header>
        <main className="app-main">{children}</main>
      </body>
    </html>
  );
}