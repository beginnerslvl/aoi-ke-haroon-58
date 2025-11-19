import { MainLayout } from "@/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Plus } from "lucide-react";

// Mock character data
const mockCharacters = [
  {
    id: 1,
    name: "Luna",
    race: "Elf",
    gender: "Female",
    hairColor: "Silver",
    eyeColor: "Blue",
  },
  {
    id: 2,
    name: "Marcus",
    race: "Human",
    gender: "Male",
    hairColor: "Black",
    eyeColor: "Green",
  },
  {
    id: 3,
    name: "Aria",
    race: "Demon",
    gender: "Female",
    hairColor: "Red",
    eyeColor: "Purple",
  },
];

export default function Characters() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Characters</h1>
            <p className="text-muted-foreground">
              Manage and interact with your created characters
            </p>
          </div>
          <Button onClick={() => navigate("/create/quick")} className="gap-2">
            <Plus className="w-4 h-4" />
            Create New
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCharacters.map((character) => (
            <Card
              key={character.id}
              className="p-6 hover:scale-105 transition-all cursor-pointer hover-glow bg-card/50 backdrop-blur border-border/50"
            >
              <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{character.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{character.race}</Badge>
                <Badge variant="outline">{character.gender}</Badge>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground mb-4">
                <p>Hair: {character.hairColor}</p>
                <p>Eyes: {character.eyeColor}</p>
              </div>
              <Button className="w-full gap-2" onClick={() => navigate("/chat")}>
                <MessageSquare className="w-4 h-4" />
                Chat with {character.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
