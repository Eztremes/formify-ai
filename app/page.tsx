import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import WorkspaceShowcase from "@/components/landing/WorkspaceShowcase";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <WorkspaceShowcase/>
      </main>
    </>
  );
}