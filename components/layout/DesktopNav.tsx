import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV_LINKS.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}