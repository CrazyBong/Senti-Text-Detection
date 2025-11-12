import { Zap, Target, Smartphone, BarChart3, Globe, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Analysis",
      description: "Get instant sentiment results as you type, with processing speeds under 1 second.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Accurate ML Models",
      description: "Trained on millions of social media posts with 95%+ accuracy across multiple languages.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Easy-to-Use Interface",
      description: "Clean, intuitive design that works seamlessly on desktop, tablet, and mobile devices.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Detailed Insights",
      description: "Get comprehensive sentiment breakdowns with confidence scores and emotional indicators.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Platform Support",
      description: "Analyze content from Twitter, Facebook, Instagram, LinkedIn, and more social platforms.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy Protected",
      description: "Your data is processed securely and never stored, ensuring complete privacy.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to understand the emotions and sentiment behind social media content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
