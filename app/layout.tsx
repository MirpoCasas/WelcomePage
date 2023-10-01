import "./globals.css";
import type { Metadata } from "next";
import Loader from "./assets/loader";
import { LangProvider } from "./assets/langContext";
import { OverflowProvider } from "./assets/overflowContext";

export const metadata: Metadata = {
  title: "Martin Casas Dev",
  description: "Martin Casas Dev. CV and Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <OverflowProvider>
            <Loader />
            {children}
          </OverflowProvider>
        </LangProvider>
      </body>
    </html>
  );
}
