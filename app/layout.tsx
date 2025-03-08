import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import flagsmith from "flagsmith/isomorphic";
import FlagProvider from "@/providers/FlagProvider";
import { cookies } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quizzard AI",
  description:
    "Your personalized AI agent to help you prepare and ace your exams.",
};

axios.defaults.baseURL = process.env.BASE_URL;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const identity = (await cookies()).get("temporary_token")?.value || "";
  const environmentID = process.env.FLAGSMITH_API_KEY || "";

  const flagsmithState = await flagsmith
    .init({
      environmentID,
      identity,
    })
    .then(() => flagsmith.getState());

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FlagProvider flagsmithState={flagsmithState}>
          <Navbar />
          <div className="mt-40">{children}</div>
          <Footer />
        </FlagProvider>
      </body>
    </html>
  );
}
