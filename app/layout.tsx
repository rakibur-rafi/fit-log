import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WorkoutProvider from "./context/WorkoutContext";
import { ToastContainer } from "react-toastify";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: false,
})

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  preload: false,
})

export const metadata: Metadata = {
  title: "Fitlog",
  description: "Your gym companion",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <WorkoutProvider>
          <ToastContainer/>
          <Navbar />
          <main className="flex-1">{children}</main>
        </WorkoutProvider>
      </body>
    </html>
  );
}
