import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Circle, Star, Folder, Sparkles, ChevronDown, 
  Grid3x3, Menu, Plus, Upload, Video 
} from "lucide-react";

export default function VideoGenerator() {
  const [selectedView, setSelectedView] = useState("task");

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0f]">
      {/* Top Bar */}
      <div className="h-14 bg-[#0a0a0f] border-b border-border/20 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Wan</span>
          </div>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            Creation: All
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Sparkles className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Grid3x3 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Circle className="w-4 h-4" />
          </Button>
          <Button variant="default" size="sm">
            Upgrade
          </Button>
          <div className="flex items-center gap-2 text-sm">
            <Plus className="w-4 h-4" />
            <span>0</span>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full bg-primary">
            <span className="text-xs text-primary-foreground">U</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-16 bg-[#0a0a0f] border-r border-border/20 flex flex-col items-center py-4 gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Circle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Sparkles className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Video className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Grid3x3 className="w-5 h-5" />
          </Button>
          <div className="flex-1" />
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Folder className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Star className="w-5 h-5" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Controls */}
          <div className="h-12 bg-[#0a0a0f] border-b border-border/20 flex items-center justify-end px-6 gap-2">
            <Checkbox id="favorite" />
            <label htmlFor="favorite" className="text-sm text-muted-foreground">Favorite</label>
            <div className="flex gap-1 ml-4">
              <Button 
                variant={selectedView === "task" ? "secondary" : "ghost"} 
                size="sm"
                onClick={() => setSelectedView("task")}
              >
                Task View
              </Button>
              <Button 
                variant={selectedView === "merge" ? "secondary" : "ghost"} 
                size="sm"
                onClick={() => setSelectedView("merge")}
              >
                Merge View
              </Button>
            </div>
          </div>

          {/* Empty State */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-12 h-12 text-muted-foreground" />
              </div>
              <Folder className="w-20 h-20 text-muted-foreground mx-auto mb-2" />
              <h3 className="text-lg font-medium text-muted-foreground mb-1">Empty</h3>
              <p className="text-sm text-muted-foreground/60">Start your first creative content.</p>
            </div>
          </div>

          {/* Bottom Generation Panel */}
          <div className="border-t border-border/20 bg-[#0d0d12] p-6">
            <div className="max-w-4xl mx-auto space-y-4">
              {/* Example Button */}
              <div className="flex justify-center mb-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  Example
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </div>

              {/* First Frame Upload */}
              <Card className="p-6 bg-card/30 border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 rounded-lg bg-muted/20 flex items-center justify-center cursor-pointer hover:bg-muted/30 transition-colors">
                    <div className="text-center">
                      <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Add image</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium mb-1">First Frame</h4>
                        <p className="text-sm text-muted-foreground">
                          Select an image and use it as the first frame of the video
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Prompt Input */}
              <div className="relative">
                <Textarea
                  placeholder="Refer to the image and describe the desired dynamic process."
                  className="min-h-[60px] pr-12 bg-card/30 border-border/50"
                />
                <Button 
                  size="icon" 
                  className="absolute right-2 top-2"
                  variant="ghost"
                >
                  <Sparkles className="w-4 h-4" />
                </Button>
              </div>

              {/* Bottom Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Video className="w-4 h-4" />
                    Video
                  </Button>
                  <Button variant="ghost" size="sm">
                    Image to Video
                  </Button>
                  <div className="h-6 w-px bg-border mx-2" />
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Sparkles className="w-3 h-3" />
                    Wan2.5
                  </Button>
                  <Button variant="ghost" size="sm">720P</Button>
                  <Button variant="ghost" size="sm">5s</Button>
                  <Button variant="ghost" size="icon">
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Grid3x3 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-4 h-4" />
                  </Button>
                </div>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  0
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
