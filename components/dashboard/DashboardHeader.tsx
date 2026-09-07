"use client";

import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="border-b border-border/60 bg-background">
      <div className="flex h-16 items-center justify-between gap-4 px-6 md:px-10">
        {/* Search */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search documents..."
            className="h-10 w-full rounded-xl border border-border/60 bg-muted/20 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:bg-background"
          />
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Bell className="h-4 w-4" />
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}