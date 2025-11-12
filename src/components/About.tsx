import { Brain, TrendingUp, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What is Sentiment Analysis?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sentiment analysis uses natural language processing and machine learning 
            to identify and extract subjective information from text, helping you 
            understand the emotions and opinions expressed in social media posts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-lg-custom transition-all animate-scale-in">
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Brain className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Machine Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our models are trained on millions of social media posts to accurately 
              detect emotional patterns and sentiment nuances in text.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-lg-custom transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Real-time Processing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get instant sentiment analysis results with our optimized algorithms 
              that process text in milliseconds, not minutes.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-lg-custom transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Privacy First</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your data is processed securely and never stored. We prioritize 
              your privacy while delivering accurate sentiment insights.
            </p>
          </div>
        </div>

        <div className="bg-card p-10 rounded-2xl shadow-card">
          <h3 className="text-3xl font-bold mb-6 text-card-foreground">How It Works</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Text Input</h4>
                <p className="text-muted-foreground">
                  Paste or type any social media post, tweet, or comment into our analysis tool.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">AI Processing</h4>
                <p className="text-muted-foreground">
                  Our machine learning model analyzes the text, identifying emotional patterns, tone, and context.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">Get Results</h4>
                <p className="text-muted-foreground">
                  Receive instant feedback on whether the sentiment is positive, negative, or neutral with confidence scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
