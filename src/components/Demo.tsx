import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Smile, Frown, Meh, Sparkles, Wind, CloudRain, Zap, Flame } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type SentimentResult = "positive" | "negative" | "neutral" | "calm" | "sad" | "shock" | "anger" | null;

const Demo = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState<SentimentResult>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const analyzeSentiment = () => {
    if (!text.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some text to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate API call with a simple sentiment detection
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      const positiveWords = ["good", "great", "awesome", "love", "excellent", "happy", "wonderful", "amazing", "fantastic", "best"];
      const negativeWords = ["bad", "terrible", "hate", "worst", "awful", "horrible", "disappointed", "poor"];
      const calmWords = ["calm", "peaceful", "relaxed", "serene", "tranquil", "quiet", "gentle", "soothing", "content"];
      const sadWords = ["sad", "depressed", "unhappy", "miserable", "heartbroken", "crying", "tears", "lonely", "blue"];
      const shockWords = ["shock", "surprised", "stunned", "amazed", "astonished", "wow", "unbelievable", "unexpected", "can't believe"];
      const angerWords = ["angry", "furious", "mad", "rage", "outraged", "irritated", "frustrated", "annoyed", "livid", "hate"];
      
      const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
      const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;
      const calmCount = calmWords.filter(word => lowerText.includes(word)).length;
      const sadCount = sadWords.filter(word => lowerText.includes(word)).length;
      const shockCount = shockWords.filter(word => lowerText.includes(word)).length;
      const angerCount = angerWords.filter(word => lowerText.includes(word)).length;
      
      const counts = { positive: positiveCount, negative: negativeCount, calm: calmCount, sad: sadCount, shock: shockCount, anger: angerCount };
      const maxCount = Math.max(...Object.values(counts));
      
      let result: SentimentResult;
      if (maxCount === 0) {
        result = "neutral";
      } else {
        result = Object.keys(counts).find(key => counts[key as keyof typeof counts] === maxCount) as SentimentResult;
      }
      
      setSentiment(result);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: `Sentiment detected: ${result}`,
      });
    }, 1500);
  };

  const getSentimentDisplay = () => {
    if (!sentiment) return null;

    const displays = {
      positive: {
        icon: <Smile className="h-16 w-16" />,
        color: "text-success",
        bgColor: "bg-success/10",
        label: "Positive",
        description: "This text expresses positive emotions and optimistic sentiment.",
      },
      negative: {
        icon: <Frown className="h-16 w-16" />,
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        label: "Negative",
        description: "This text expresses negative emotions or critical sentiment.",
      },
      neutral: {
        icon: <Meh className="h-16 w-16" />,
        color: "text-muted-foreground",
        bgColor: "bg-muted",
        label: "Neutral",
        description: "This text has a balanced or objective tone without strong emotions.",
      },
      calm: {
        icon: <Wind className="h-16 w-16" />,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        label: "Calm",
        description: "This text conveys a peaceful, serene, and relaxed sentiment.",
      },
      sad: {
        icon: <CloudRain className="h-16 w-16" />,
        color: "text-slate-500",
        bgColor: "bg-slate-500/10",
        label: "Sad",
        description: "This text expresses sadness, melancholy, or emotional distress.",
      },
      shock: {
        icon: <Zap className="h-16 w-16" />,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        label: "Shock",
        description: "This text shows surprise, astonishment, or disbelief.",
      },
      anger: {
        icon: <Flame className="h-16 w-16" />,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        label: "Anger",
        description: "This text expresses anger, frustration, or intense displeasure.",
      },
    };

    const display = displays[sentiment];

    return (
      <Card className="p-8 mt-6 animate-scale-in">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${display.bgColor} ${display.color} mb-4`}>
            {display.icon}
          </div>
          <h3 className="text-3xl font-bold mb-2 text-card-foreground">{display.label} Sentiment</h3>
          <p className="text-muted-foreground text-lg">{display.description}</p>
        </div>
      </Card>
    );
  };

  return (
    <section id="demo" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold">Try it yourself</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Live Sentiment Analysis
          </h2>
          <p className="text-xl text-muted-foreground">
            Paste any social media post or text to see our AI in action
          </p>
        </div>

        <Card className="p-8 shadow-lg-custom">
          <div className="space-y-6">
            <div>
              <label htmlFor="text-input" className="block text-lg font-semibold mb-3 text-card-foreground">
                Enter Text to Analyze
              </label>
              <Textarea
                id="text-input"
                placeholder="Example: I love this new feature! It makes my work so much easier and faster. Great job team!"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[150px] text-base resize-none"
              />
            </div>

            <Button
              onClick={analyzeSentiment}
              disabled={isAnalyzing}
              size="lg"
              className="w-full text-lg py-6"
            >
              {isAnalyzing ? (
                <>
                  <span className="animate-pulse">Analyzing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Analyze Sentiment
                </>
              )}
            </Button>

            {getSentimentDisplay()}
          </div>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>💡 Tip: Try different texts with varying emotions to see how accurately our model detects sentiment!</p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
