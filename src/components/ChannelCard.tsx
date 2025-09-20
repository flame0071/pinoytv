import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users } from "lucide-react";

interface ChannelCardProps {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  description: string;
  isLive?: boolean;
  viewers?: number;
  onClick: (channelId: string) => void;
}

export const ChannelCard = ({
  id,
  name,
  category,
  thumbnail,
  description,
  isLive = true,
  viewers,
  onClick,
}: ChannelCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden card-enhanced animate-fade-in hover:shadow-elegant border-border/30 backdrop-blur-sm"
      onClick={() => onClick(id)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-gradient-warm rounded-full p-4 backdrop-blur-sm animate-glow-pulse button-glow shadow-elegant">
            <Play className="h-8 w-8 text-white fill-current animate-scale-in" />
          </div>
        </div>

        {/* Live Badge */}
        {isLive && (
          <div className="absolute top-3 left-3">
            <Badge variant="destructive" className="bg-red-500 hover:bg-red-600 live-pulse font-bold tracking-wide">
              ● LIVE
            </Badge>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-gradient-cool/20 backdrop-blur-md border border-accent/30 text-accent font-medium">
            {category}
          </Badge>
        </div>

        {/* Viewers Count */}
        {viewers && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white text-sm bg-black/50 rounded-full px-2 py-1 backdrop-blur-sm">
            <Users className="h-3 w-3" />
            <span>{viewers.toLocaleString()}</span>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-2">
        <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-all duration-300 group-hover:scale-[1.02]">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};