import { MainLayout } from "@/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Users, MessageSquare, Image, Video, Wand2 } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Quick Character Creation",
      description: "Create amazing characters in minutes with our simple wizard",
      icon: Wand2,
      gradient: "from-neon-pink to-neon-purple",
      action: () => navigate("/create/quick"),
    },
    {
      title: "Advanced Creation",
      description: "Full control over every aspect of your character",
      icon: Sparkles,
      gradient: "from-neon-purple to-neon-blue",
      action: () => navigate("/create/advanced"),
    },
    {
      title: "Browse Characters",
      description: "Explore your saved characters library",
      icon: Users,
      gradient: "from-neon-cyan to-neon-blue",
      action: () => navigate("/characters"),
    },
  ];

  const quickActions = [
    {
      title: "Start a Story",
      description: "Chat with your characters",
      icon: MessageSquare,
      action: () => navigate("/chat"),
    },
    {
      title: "Generate Image",
      description: "Create stunning visuals",
      icon: Image,
      action: () => navigate("/image"),
    },
    {
      title: "Generate Video",
      description: "Bring characters to life",
      icon: Video,
      action: () => navigate("/video"),
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Welcome to AI Creative Studio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create characters, chat with them, generate stunning images and videos,
            all powered by AI
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 cursor-pointer hover:scale-105 transition-all hover-glow border-border/50 bg-card/50 backdrop-blur"
                onClick={feature.action}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card
                  key={action.title}
                  className="p-6 cursor-pointer hover:scale-105 transition-all border-border/50 bg-card/30"
                  onClick={action.action}
                >
                  <Icon className="w-8 h-8 mb-3 text-primary" />
                  <h3 className="font-semibold mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <Card className="p-8 bg-gradient-to-br from-card/50 to-card/30 border-border/50">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Create Character", desc: "Use our wizard to build your character" },
              { step: "2", title: "Customize", desc: "Fine-tune appearance and personality" },
              { step: "3", title: "Generate", desc: "Create images, videos, and stories" },
              { step: "4", title: "Interact", desc: "Chat and bring your characters to life" },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
