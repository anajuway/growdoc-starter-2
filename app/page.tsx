import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Entregaveis from "./components/Entregaveis";
import Portfolio from "./components/Portfolio";
import SitesInstitucionais from "./components/SitesInstitucionais";
import Proposta from "./components/Proposta";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import StickyBar from "./components/StickyBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#131515] text-white overflow-hidden">
      <ProgressBar />
      <StickyBar />
      <Navbar />
      <Hero />
      <Entregaveis />
      <SitesInstitucionais />
      <Portfolio />
      <Proposta />
      <Footer />
    </main>
  );
}
