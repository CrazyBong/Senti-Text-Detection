import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Smile, Frown, Meh, Sparkles, Wind, CloudRain, Zap, Flame } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define type for backend response
type EmotionResult = {
  primary_emotion: string;
  primary_confidence: number;
  secondary_emotion: string;
  secondary_confidence: number;
};

const Demo = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<EmotionResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some text to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
        toast({
          title: "Analysis Complete",
          description: `Emotion detected: ${data.primary_emotion}`,
        });
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (err) {
      setError("Unable to connect to backend. Make sure the Flask server is running.");
      console.error("Error:", err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getEmotionDisplay = () => {
    if (!result) return null;

    // Map emotions to display properties
    const emotionMap: Record<string, { icon: React.ReactElement; color: string; bgColor: string; label: string }> = {
      joy: {
        icon: <Smile className="h-16 w-16" />,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/10",
        label: "Joy",
      },
      sadness: {
        icon: <CloudRain className="h-16 w-16" />,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        label: "Sadness",
      },
      anger: {
        icon: <Flame className="h-16 w-16" />,
        color: "text-red-500",
        bgColor: "bg-red-500/10",
        label: "Anger",
      },
      fear: {
        icon: <Wind className="h-16 w-16" />,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        label: "Fear",
      },
      love: {
        icon: <Sparkles className="h-16 w-16" />,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        label: "Love",
      },
      surprise: {
        icon: <Zap className="h-16 w-16" />,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        label: "Surprise",
      },
    };

    // Default fallback
    const display = emotionMap[result.primary_emotion] || {
      icon: <Meh className="h-16 w-16" />,
      color: "text-gray-500",
      bgColor: "bg-gray-500/10",
      label: result.primary_emotion.charAt(0).toUpperCase() + result.primary_emotion.slice(1),
    };

    return (
      <Card className="p-8 mt-6 animate-in fade-in-50 zoom-in-90 duration-300">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${display.bgColor} ${display.color} mb-4`}>
            {display.icon}
          </div>
          <h3 className="text-3xl font-bold mb-2 text-card-foreground">{display.label} Emotion</h3>
          <p className="text-muted-foreground text-lg">
            Confidence: {result.primary_confidence}%
          </p>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Secondary emotion: {result.secondary_emotion} ({result.secondary_confidence}%)
            </p>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <section id="demo" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-in slide-in-from-bottom-4 duration-500">
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

        <Card className="p-8 shadow-lg">
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

            {error && (
              <div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-lg">
                <p>{error}</p>
              </div>
            )}

            {getEmotionDisplay()}
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