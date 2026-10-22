"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/recipes", label: "Recipes", active: pathname === "/" || pathname.startsWith("/recipes") },
    { href: "/cuisines", label: "Cuisines", active: pathname.startsWith("/cuisines") },
    { href: "/about", label: "About", active: pathname.startsWith("/about") },
  ];

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              ER
            </div>
            <span className="font-bold text-base tracking-tight text-slate-900">
              Everyday Recipes
            </span>
          </Link>
          <nav className="flex space-x-6 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-5 font-medium border-b-2 transition-colors ${
                  link.active
                    ? "border-blue-600 text-slate-900"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link
          href="/studio"
          className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3.5 py-2 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Recipe</span>
        </Link>
      </div>
    </header>
  );
}
