import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, Tv, Star } from "lucide-react";
import { channels } from "@/data/channels";

interface MinimalistLandingProps {
  onChannelSelect: (channelId: string) => void;
  onShowChannels: () => void;
}

export const MinimalistLanding = ({ onChannelSelect, onShowChannels }: MinimalistLandingProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChannels = channels.filter(channel =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 4); // Show only first 4 results

  const handleQuickPlay = (channelId: string) => {
    onChannelSelect(channelId);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8 text-center">
        {/* Logo/Title */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Tv className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-black text-foreground">
              Pinoy<span className="gradient-text">TV</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            PinoyTV is a streaming app that provides Filipino channels and content.
          </p>
          <p className="text-muted-foreground">
            To watch channels, browse our available Filipino TV channels below.
          </p>
        </div>

        {/* Quick Search */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-center bg-card border-border/50 focus:border-primary/50"
            />
          </div>

          {/* Quick Access Channels */}
          {searchQuery && filteredChannels.length > 0 && (
            <div className="bg-card/80 rounded-lg border border-border/50 p-4 space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Quick Access</h3>
              <div className="grid grid-cols-1 gap-2">
                {filteredChannels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => handleQuickPlay(channel.id)}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors text-left"
                  >
                    <Play className="w-4 h-4 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{channel.name}</p>
                      <p className="text-sm text-muted-foreground">{channel.category}</p>
                    </div>
                    {channel.isLive && (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
                        <span className="text-xs text-muted-foreground">LIVE</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Action Button */}
        <div className="space-y-4">
          <Button
            onClick={onShowChannels}
            size="lg"
            className="w-full max-w-sm mx-auto button-glow bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Browse All Channels
          </Button>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              <span>{channels.length} Channels Available</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
              <span>Live Broadcasting</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 PinoyTV. Para sa mga Pinoy sa buong mundo.
          </p>
        </div>
      </div>
    </div>
  );
};