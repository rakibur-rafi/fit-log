"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { WorkoutContext } from "../context/WorkoutContext";

const navItems =[
  {
    name: "Workouts",
    href: "/",
  },
  {
    name: "My Plan",
    href: "/my-plan",
  }]

const Navbar = () => {

  const { plan, saved} = useContext(WorkoutContext)

  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1C1F26] bg-black/75 backdrop-blur-2xl  text-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">

        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={28}
            height={28}
          />

          <p className="font-oswald text-2xl font-bold">
            FITLOG
          </p>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#15171D] text-[#C2F800]"
                    : "text-[#9CA3AF] hover:bg-[#15171D] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium hover:bg-[#15171D] hover:text-white"
          >
            <span className="text-[#D1D5DB]">
              Plan
            </span>

            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-extrabold leading-none text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium hover:bg-[#15171D] hover:text-white"
          >
            <span className="text-[#9CA3AF]">
              Saved
            </span>

            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#9CA3AF] text-xs font-extrabold leading-none text-[#9CA3AF]">
              {saved.length}
            </span>
          </Link>
        </div>

        {/* Menu*/}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full p-2 text-[#D1D5DB] hover:bg-[#15171D] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FiX size={22} />
          ) : (
            <FiMenu size={22} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#1C1F26] bg-black px-4 py-4 md:hidden">

          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-[#15171D] text-[#C2F800]"
                      : "text-[#9CA3AF] hover:bg-[#15171D] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 flex gap-2 border-t border-[#1C1F26] pt-3">

            <Link href="/my-plan" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#15171D] px-4 py-3 text-sm font-medium">
              <span className="text-[#D1D5DB]">
                Plan
              </span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C2F800] text-xs font-bold text-black">
                {plan.length}
              </span>
            </Link>

            <Link href="/my-plan" className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#15171D] px-4 py-3 text-sm font-medium">
              <span className="text-[#9CA3AF]">
                Saved
              </span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#9CA3AF] text-xs font-bold text-[#9CA3AF]">
                {saved.length}
              </span>
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;