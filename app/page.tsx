import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Entregaveis from "./components/Entregaveis";
import EnsaioArtIA from "./components/EnsaioArtIA";
import Portfolio from "./components/Portfolio";
import ComoFunciona from "./components/ComoFunciona";
import Depoimentos from "./components/Depoimentos";
import WallOfLove from "./components/WallOfLove";
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
      <Diferenciais />
      <Entregaveis />
      <EnsaioArtIA />
      <Portfolio />
      <ComoFunciona />
      <Depoimentos />
      <WallOfLove />
      <Proposta />
      <Footer />
    </main>
  );
}
