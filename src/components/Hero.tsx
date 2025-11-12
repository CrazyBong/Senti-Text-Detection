import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="inline-block mb-6 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground">
          Powered by Machine Learning
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
          Senti
          <span className="block gradient-primary bg-clip-text text-transparent">
            Social Media Posts
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Our sentiment analysis tool detects positive, negative, or neutral emotions 
          from social media content using advanced machine learning algorithms.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToDemo}
            className="text-lg px-8 py-6 shadow-lg-custom hover:scale-105 transition-transform"
          >
            Try Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-card p-6 rounded-2xl shadow-card">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-card">
            <div className="text-4xl font-bold text-primary mb-2">&lt;1s</div>
            <div className="text-muted-foreground">Analysis Time</div>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-card">
            <div className="text-4xl font-bold text-primary mb-2">100K+</div>
            <div className="text-muted-foreground">Posts Analyzed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
