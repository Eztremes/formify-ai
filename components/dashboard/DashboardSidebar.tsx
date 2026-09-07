"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  LayoutTemplate,
  MessageSquare,
  Settings,
  Sparkles,
  ChevronLeft,
} from "lucide-react";

import { cn } from "@/utils/cn";

const navigation = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: FileText,
  },
  {
    label: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
  },
  {
    label: "Templates",
    href: "/dashboard/templates",
    icon: LayoutTemplate,
  },
  {
    label: "AI Assistant",
    href: "/dashboard/ai",
    icon: MessageSquare,
  },
];

const secondaryNavigation = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border/60 bg-background md:flex md:flex-col">
      {/* Brand */}
      <div className="flex h-20 items-center border-b border-border/60 px-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 text-white shadow-sm">
            <FileText className="h-5 w-5" />
          </div>

          <div>
            <div className="font-semibold tracking-tight">
              Formify AI
            </div>

            <div className="text-xs text-muted-foreground">
              AI Document Workspace
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 py-6">
        <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Workspace
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <Icon className="h-4.5 w-4.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <p className="mb-3 mt-8 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Account
        </p>

        <nav className="space-y-1">
          {secondaryNavigation.map((item) => {
            const Icon = item.icon;

            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <Icon className="h-4.5 w-4.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* AI Pro card */}
        <div className="mt-8 rounded-2xl border border-border/60 bg-muted/30 p-4">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-background shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>

          <p className="text-sm font-semibold">
            Work smarter with AI
          </p>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Summarize, analyze, and transform your documents instantly.
          </p>

          <button className="mt-4 w-full rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium transition-colors hover:bg-muted">
            Explore AI tools
          </button>
        </div>
      </div>

      {/* Bottom profile area */}
      <div className="border-t border-border/60 p-3">
        <div className="flex items-center gap-3 rounded-xl px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-semibold">
            JD
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">
              John Doe
            </p>

            <p className="truncate text-xs text-muted-foreground">
              Free plan
            </p>
          </div>

          <ChevronLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
}