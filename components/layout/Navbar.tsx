import Logo from "./Logo";
import Container from "./Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

import Button from "@/components/common/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <DesktopNav />

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <Button>
              Login
            </Button>

            <Button icon>
              Get Started
            </Button>
          </div>

          <MobileNav />

        </div>
      </Container>
    </header>
  );
}