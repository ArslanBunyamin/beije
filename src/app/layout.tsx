import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "beije.",
  description: "beije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <StoreProvider>
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <div className="min-h-screen">
              <Navbar />
              <div className="pt-16 h-full">{children}</div>
              <Footer />
            </div>
          </AppRouterCacheProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
