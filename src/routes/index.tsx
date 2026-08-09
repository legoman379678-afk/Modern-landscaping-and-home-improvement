import { createFileRoute } from "@tanstack/react-router";
import About from "~/components/About";
import AiDrawer from "~/components/AiDrawer";
import EstimateForm from "~/components/EstimateForm";
import Faq from "~/components/Faq";
import FinalCta from "~/components/FinalCta";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import MobileBar from "~/components/MobileBar";
import Nav from "~/components/Nav";
import Projects from "~/components/Projects";
import Reviews from "~/components/Reviews";
import Services from "~/components/Services";
import WhyChooseUs from "~/components/WhyChooseUs";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Reviews />
        <About />
        <EstimateForm />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <AiDrawer />
    </>
  );
}
