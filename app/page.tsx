import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Activities from "@/components/Activities";
import Team from "@/components/Team";
import Join from "@/components/Join";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
<About />
        <Events />
        <Activities />
        <Team />
<Join />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
