"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
    { href: "https://www.youtube.com/channel/UCCiIo5ZypN2A4KHNOPOmhLQ", label: "YouTube"}
  ];

  return (
    <nav className="w-full bg-[var(--color-secondary)] p-4 sticky top-0 z-50 shadow-md">
      <ul className="flex justify-center space-x-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-md font-medium transition-all ${
                  isActive
                    ? "underline text-[var(--foreground)]"
                    : "text-[var(--foreground)]/90 hover:text-[var(--foreground)] hover:underline"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
