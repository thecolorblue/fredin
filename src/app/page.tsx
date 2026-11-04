import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Shipped } from "@/components/Shipped";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="page">
        <Hero />
        <Shipped />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
