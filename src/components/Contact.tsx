import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate group of researchers and developers dedicated to advancing sentiment analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center animate-scale-in">
            <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-card-foreground">Harshit Namdev</h3>
            <p className="text-muted-foreground mb-2">Computer Science Major</p>
            <p className="text-sm text-muted-foreground">Specilizing in AI & ML</p>
          </Card>

          <Card className="p-8 text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-card-foreground">Harshad Namdev</h3>
            <p className="text-muted-foreground mb-2">Computer Science Major</p>
            <p className="text-sm text-muted-foreground">Specilizing in AI & ML</p>
          </Card>

          <Card className="p-8 text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-card-foreground">Swayam Pal</h3>
            <p className="text-muted-foreground mb-2">Computer Science Major</p>
            <p className="text-sm text-muted-foreground">Specilizing in AI & ML</p>
          </Card>
        </div>

        <Card className="p-10 max-w-2xl mx-auto shadow-lg-custom">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold text-card-foreground">Get in Touch</h3>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Have questions about our project or want to collaborate? Send us a message!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-card-foreground">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-card-foreground">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-card-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px] resize-none"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
