import { useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wand2, Upload, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    toast({
      title: "Generating Video",
      description: "Your video is being created...",
    });
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Video Generated!",
        description: "Your video is ready.",
      });
    }, 5000);
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Video Generator</h1>
          <p className="text-muted-foreground">
            Create animated videos from text or images
          </p>
        </div>

        <Tabs defaultValue="text-to-video" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="text-to-video">Text-to-Video</TabsTrigger>
            <TabsTrigger value="image-to-video">Image-to-Video</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Area */}
            <div className="lg:col-span-2 space-y-6">
              <TabsContent value="text-to-video" className="mt-0">
                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 space-y-4">
                  <div>
                    <Label className="mb-2 block">Video Prompt</Label>
                    <Textarea
                      placeholder="Describe the video you want to create..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full h-12 text-lg gap-2 bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
                  >
                    <Wand2 className="w-5 h-5" />
                    {isGenerating ? "Generating..." : "Generate Video"}
                  </Button>
                </Card>
              </TabsContent>

              <TabsContent value="image-to-video" className="mt-0">
                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 space-y-4">
                  <div>
                    <Label className="mb-2 block">Upload Image</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-12 text-center cursor-pointer hover:border-primary transition-colors">
                      <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Click or drag an image to upload
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        JPG, PNG, WEBP (max 3MB)
                      </p>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-2 block">Motion Prompt (Optional)</Label>
                    <Textarea
                      placeholder="Describe how the image should move..."
                      className="min-h-[80px]"
                    />
                  </div>
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full h-12 text-lg gap-2 bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
                  >
                    <Wand2 className="w-5 h-5" />
                    {isGenerating ? "Generating..." : "Generate Video"}
                  </Button>
                </Card>
              </TabsContent>

              {/* Preview */}
              <Card className="p-6 bg-card/30 backdrop-blur border-border/50">
                <Label className="mb-3 block">Preview</Label>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">Generated video will appear here</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Settings */}
            <div>
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50 space-y-4">
                <h3 className="font-bold">Video Settings</h3>

                <div>
                  <Label className="mb-2 block">Model</Label>
                  <Select defaultValue="wan">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wan">WAN Video 2.2</SelectItem>
                      <SelectItem value="animate">AnimateDiff</SelectItem>
                      <SelectItem value="video">VideoCrafter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-2 block">Duration (seconds)</Label>
                  <Slider defaultValue={[5]} min={1} max={10} step={1} />
                  <p className="text-sm text-muted-foreground mt-1">5 seconds</p>
                </div>

                <div>
                  <Label className="mb-2 block">Resolution</Label>
                  <Select defaultValue="720">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="480">480p</SelectItem>
                      <SelectItem value="720">720p</SelectItem>
                      <SelectItem value="1080">1080p</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-2 block">Frame Rate</Label>
                  <Select defaultValue="24">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24">24 FPS</SelectItem>
                      <SelectItem value="30">30 FPS</SelectItem>
                      <SelectItem value="60">60 FPS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-2 block">Camera Movement</Label>
                  <Select defaultValue="none">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="pan">Pan</SelectItem>
                      <SelectItem value="zoom">Zoom</SelectItem>
                      <SelectItem value="rotate">Rotate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    Inspired by WAN Video - Integration coming soon
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </MainLayout>
  );
}
