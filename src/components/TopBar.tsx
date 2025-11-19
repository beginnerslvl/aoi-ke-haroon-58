import { Search, Bell, Coins } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-card/50 backdrop-blur-lg">
      <div className="flex items-center gap-4 px-4 py-3">
        <SidebarTrigger />
        
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search characters, models, styles..."
              className="pl-10 bg-muted/30 border-muted"
            />
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-neon-pink to-neon-purple text-white border-0 hover:opacity-90"
        >
          Subscribe with 70% discount
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-primary text-[10px]">
              3
            </Badge>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => navigate("/account")}
          >
            <Coins className="w-4 h-4 text-neon-cyan" />
            <span className="font-semibold">1,234</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-neon-pink to-neon-purple text-white">
                    U
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/account")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/settings")}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
