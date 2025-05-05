"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-penn-blue/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Carbon Neutro
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-white hover:text-indigo-300 transition-colors ${pathname === "/" ? "border-b-2" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-white hover:text-indigo-300 transition-colors ${
                pathname === "/about" ? "border-b-2" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className={`text-white hover:text-indigo-300 transition-colors ${
                pathname === "/products" ? "border-b-2" : ""
              }`}
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

