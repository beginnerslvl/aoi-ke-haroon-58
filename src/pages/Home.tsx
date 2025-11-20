import { MainLayout } from "@/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Image as ImageIcon, Video, Grid3x3, Check } from "lucide-react";

// Mock character data for the Tavern section
const mockCharacters = [
  {
    id: 1,
    name: "Kiryuu Kikyou",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    category: "Anime",
    gender: "Female",
    tags: ["Roleplay"]
  },
  {
    id: 2,
    name: "Luna",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
    category: "Fantasy",
    gender: "Female",
    tags: ["Adventure"]
  },
  {
    id: 3,
    name: "Aria",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop",
    category: "Gaming",
    gender: "Female",
    tags: ["Action"]
  },
  {
    id: 4,
    name: "Sakura",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
    category: "Anime",
    gender: "Female",
    tags: ["Slice of Life"]
  }
];

const categories = ["Events", "Fantasy", "Furry", "Gaming", "Gender: Female", "Gender: Male", "Giant", "Kemono"];

export default function Home() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            plataforma creativa habilitada por IA
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="text-sm">
              <span className="mr-1">📱</span> Aplicación móvil
            </Badge>
          </div>
        </div>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card
            className="p-6 hover:scale-105 transition-all cursor-pointer bg-card/50 backdrop-blur border-border/50 hover-glow"
            onClick={() => navigate("/chat")}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Charla en la taberna</h3>
            <p className="text-sm text-center text-muted-foreground">
              Vive experiencias interactivas de rol, conversaciones significativas y aventuras sin fin con tus personajes de anime favoritos.
            </p>
          </Card>

          <Card
            className="p-6 hover:scale-105 transition-all cursor-pointer bg-card/50 backdrop-blur border-border/50 hover-glow"
            onClick={() => navigate("/image")}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Generación de imágenes</h3>
            <p className="text-sm text-center text-muted-foreground">
              Desata tu creatividad con nuestro Generador de Imágenes: da vida a tus personajes y redefine el arte de la creación.
            </p>
          </Card>

          <Card
            className="p-6 hover:scale-105 transition-all cursor-pointer bg-card/50 backdrop-blur border-border/50 hover-glow"
            onClick={() => navigate("/video")}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Video className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Generación de vídeo</h3>
            <p className="text-sm text-center text-muted-foreground">
              Crea vídeos de alta calidad y da vida a tus personajes.
            </p>
          </Card>

          <Card
            className="p-6 hover:scale-105 transition-all cursor-pointer bg-card/50 backdrop-blur border-border/50 hover-glow"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-green-500/20 rounded-xl flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Publicaciones</h3>
            <p className="text-sm text-center text-muted-foreground">
              Explora y colecciona imágenes y vídeos creados por la comunidad, todo en un espacio vibrante.
            </p>
          </Card>

          <Card
            className="p-6 hover:scale-105 transition-all cursor-pointer bg-card/50 backdrop-blur border-border/50 hover-glow"
            onClick={() => navigate("/model-hub")}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Grid3x3 className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Centro de modelos</h3>
            <p className="text-sm text-center text-muted-foreground">
              Sube tus modelos favoritos sin esfuerzo para crear impresionantes obras de arte IA en miles de estilos de anime diferentes.
            </p>
          </Card>
        </div>

        {/* Tavern Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Taberna</h2>
            <p className="text-muted-foreground mb-2">
              Desbloquea un mundo de rol sin límites: crea historias, explora mundos y chatea con millones de personajes de anime gracias a LLM como GLM-4.6, Claude Sonnet-4.5, DeepSeek V3.1 y Gemini 2.5 Pro.
            </p>
            <p className="text-muted-foreground font-medium mb-4">
              Compañeros de IA disponibles las 24 horas del día, los 7 días
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Crear personaje</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Voz clon</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Crear libros de saber</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>Imagen en el chat</span>
              </div>
            </div>

            <Button className="mt-4">Charlar</Button>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-secondary/80 whitespace-nowrap">
                {category}
              </Badge>
            ))}
          </div>

          {/* Character Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockCharacters.map((character) => (
              <Card
                key={character.id}
                className="overflow-hidden hover:scale-105 transition-all cursor-pointer hover-glow bg-card/50 backdrop-blur border-border/50"
                onClick={() => navigate("/chat")}
              >
                <div className="aspect-[2/3] relative">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="font-bold text-white">{character.name}</h3>
                    <div className="flex gap-1 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {character.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {character.gender}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
