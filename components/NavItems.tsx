"use client";

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = (
  {
    // isActive = false
  }
) => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    if (pathName === "/") {
      return path === "/";
    }
    return pathName.startsWith(path);
  };
  return (
    <ul className="flex flex-col md:flex-row p-2 gap-3 sm:gap-2 font-medium">
      {NAV_ITEMS.map((item) => (
        <li key={item.href} className="nav-item">
          <Link
            href={item.href}
            className={`hover:text-yellow-400 transition-colors ${
              isActive(item.href) ? "text-gray-100" : ""
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
