import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Events from "@/components/Events";
import Activities from "@/components/Activities";
import Team from "@/components/Team";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Events />
        <Activities />
        <Team />
<Join />
      </main>
      <Footer />
    </>
  );
}
