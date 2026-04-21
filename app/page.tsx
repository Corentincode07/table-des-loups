import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Team from "@/components/Team";
import Map from "@/components/Map";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Activities />
        <Team />
        <Map />
        <Join />
      </main>
      <Footer />
    </>
  );
}
