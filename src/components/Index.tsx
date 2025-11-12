import Hero from "@/components/Hero";
import About from "@/components/About";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Demo />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
