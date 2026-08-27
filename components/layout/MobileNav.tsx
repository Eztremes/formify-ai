"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAV_LINKS } from "@/constants/navigation";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="right" className="pt-12">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-lg font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}