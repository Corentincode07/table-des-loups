import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
        <About />
        <Activities />
        <Team />
        <Join />
      </main>
      <Footer />
    </>
  );
}
