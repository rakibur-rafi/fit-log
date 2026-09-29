import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WorkoutProvider from "./context/WorkoutContext";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

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
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
            toastClassName="!rounded-xl !border !border-[#2A2E38] !bg-[#151921]/90 !text-white !shadow-xl !backdrop-blur-md"
            progressClassName="!bg-[#C2F800]"
            className="!text-md !font-medium !text-[#E5E7EB]"
          />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer/>
        </WorkoutProvider>
      </body>
    </html>
  );
}
