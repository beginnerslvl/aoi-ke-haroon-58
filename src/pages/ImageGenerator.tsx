import { useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Wand2, Upload, Download, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockModels = [
  { id: 1, name: "Anime Base v2", tag: "STYLE" },
  { id: 2, name: "Realistic Pro", tag: "STYLE" },
  { id: 3, name: "Fantasy Mix", tag: "CHARACTER" },
];

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [imagePromptOn, setImagePromptOn] = useState(false);
  const [hiresFixOn, setHiresFixOn] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    toast({
      title: "Generating Image",
      description: "Your image is being created...",
    });
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Image Generated!",
        description: "Your image is ready.",
      });
    }, 3000);
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Controls */}
        <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Prompt</Label>
                <div className="flex items-center gap-2">
                  <Label htmlFor="image-prompt" className="text-sm">Image Prompt</Label>
                  <Switch
                    id="image-prompt"
                    checked={imagePromptOn}
                    onCheckedChange={setImagePromptOn}
                  />
                </div>
              </div>
              <Textarea
                placeholder="masterpiece, best quality, amazing quality, very aesthetic..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="flex-1 h-12 text-lg gap-2 bg-gradient-to-r from-neon-pink to-neon-purple hover:opacity-90"
              >
                <Wand2 className="w-5 h-5" />
                {isGenerating ? "Generating..." : "Generate + Hires.fix"}
              </Button>
            </div>

            <div>
              <Label className="mb-2 block">Negative Prompt</Label>
              <Textarea
                placeholder="low quality, blurry, distorted..."
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                className="min-h-[80px]"
              />
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Result Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-card/30 backdrop-blur border-border/50">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <p className="text-muted-foreground">Generated image will appear here</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Heart className="w-4 h-4" />
                  Favorite
                </Button>
              </div>
            </Card>

            {/* Model Hub */}
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Model Hub</h3>
                <Button variant="ghost" size="sm">See all</Button>
              </div>
              <Tabs defaultValue="base">
                <TabsList>
                  <TabsTrigger value="base">Base Models</TabsTrigger>
                  <TabsTrigger value="lora">LoRAs</TabsTrigger>
                </TabsList>
                <TabsContent value="base" className="mt-4">
                  <div className="grid grid-cols-3 gap-3">
                    {mockModels.map((model) => (
                      <Card
                        key={model.id}
                        className="p-3 cursor-pointer hover:scale-105 transition-all"
                      >
                        <div className="aspect-square bg-muted rounded-lg mb-2" />
                        <Badge variant="secondary" className="mb-1 text-xs">
                          {model.tag}
                        </Badge>
                        <p className="text-sm font-medium truncate">{model.name}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="lora" className="mt-4">
                  <p className="text-sm text-muted-foreground text-center py-8">
                    LoRA models will appear here
                  </p>
                </TabsContent>
              </Tabs>
            </Card>

            {/* History */}
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-xl font-bold mb-4">Recent History</h3>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg" />
                ))}
              </div>
            </Card>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
              <h3 className="font-bold mb-4">Image-to-Image</h3>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-4 cursor-pointer hover:border-primary transition-colors">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click or drag to upload
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 space-y-4">
              <h3 className="font-bold">Settings</h3>
              
              <div>
                <Label className="mb-2 block">Canvas Size</Label>
                <Select defaultValue="custom">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom">Custom</SelectItem>
                    <SelectItem value="1024">1024x1024</SelectItem>
                    <SelectItem value="512">512x512</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Input type="number" placeholder="Width" defaultValue="1216" />
                  <Input type="number" placeholder="Height" defaultValue="832" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Hires.fix</Label>
                  <Switch checked={hiresFixOn} onCheckedChange={setHiresFixOn} />
                </div>
                {hiresFixOn && (
                  <div className="space-y-3 mt-3">
                    <div>
                      <Label className="text-sm mb-1 block">Upscale By (1-2)</Label>
                      <Slider defaultValue={[2]} min={1} max={2} step={0.1} />
                    </div>
                    <div>
                      <Label className="text-sm mb-1 block">Hires Steps (1-35)</Label>
                      <Slider defaultValue={[10]} min={1} max={35} step={1} />
                    </div>
                    <div>
                      <Label className="text-sm mb-1 block">Denoising (0-1)</Label>
                      <Slider defaultValue={[0.2]} min={0} max={1} step={0.05} />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Label className="mb-2 block">Upscaler</Label>
                <div className="space-y-2">
                  <Select defaultValue="main">
                    <SelectTrigger>
                      <SelectValue placeholder="Main Upscaling" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">Main Upscaling</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="inference">
                    <SelectTrigger>
                      <SelectValue placeholder="Inference Upscaling" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inference">Inference Upscaling</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                Reset to default
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
