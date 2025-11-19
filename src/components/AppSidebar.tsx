import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Home,
  Sparkles,
  MessageSquare,
  Image,
  Video,
  Grid3x3,
  Wrench,
  History,
  User,
  Settings,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Chat", url: "/chat", icon: MessageSquare },
  { title: "Image Generator", url: "/image", icon: Image },
  { title: "Video Generator", url: "/video", icon: Video },
  { title: "Model Hub", url: "/model-hub", icon: Grid3x3 },
  { title: "Tools", url: "/tools", icon: Wrench },
  { title: "History", url: "/history", icon: History },
  { title: "Account", url: "/account", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

const createItems = [
  { title: "Quick Creation", url: "/create/quick" },
  { title: "Advanced Creation", url: "/create/advanced" },
  { title: "All Characters", url: "/characters" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const [createOpen, setCreateOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;
  const isCreateActive = createItems.some((item) => isActive(item.url));

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center gap-2 px-2 py-4">
            <div className="w-8 h-8 bg-gradient-to-br from-neon-pink to-neon-purple rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {state === "expanded" && (
              <span className="font-bold text-lg bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                AI Studio
              </span>
            )}
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.slice(0, 1).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <Collapsible open={createOpen} onOpenChange={setCreateOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={isCreateActive ? "bg-sidebar-accent" : ""}>
                      <Sparkles className="w-4 h-4" />
                      <span>Create</span>
                      <ChevronRight
                        className={`ml-auto w-4 h-4 transition-transform ${
                          createOpen ? "rotate-90" : ""
                        }`}
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {createItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild isActive={isActive(item.url)}>
                            <NavLink to={item.url}>
                              <span>{item.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              {menuItems.slice(1).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
