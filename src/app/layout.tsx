import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            <>
              <Navbar />
              <div className="pt-16">{children}</div>
            </>
          </AppRouterCacheProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
