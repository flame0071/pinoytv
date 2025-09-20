import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Search, Star, Tv, Users } from "lucide-react";
import { channels } from "@/data/channels";
import { VideoPlayer } from "@/components/VideoPlayer";

interface SettingsInterfaceProps {
  onChannelSelect?: (channelId: string) => void;
}

export const SettingsInterface = ({ onChannelSelect }: SettingsInterfaceProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);

  const selectedChannel = channels.find(channel => channel.id === selectedChannelId);

  const handleChannelSelect = (channelId: string) => {
    setSelectedChannelId(channelId);
    if (onChannelSelect) {
      onChannelSelect(channelId);
    }
  };

  const filteredChannels = channels.filter(channel => 
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    channel.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Tv className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-black text-foreground">
              Pinoy<span className="gradient-text">TV</span>
            </h1>
          </div>
          <p className="text-muted-foreground">
            Filipino channel streaming platform
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 space-y-6">
          {/* Search Box */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Search Channels
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for channels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Separator />

          {/* Available Channels */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold gradient-text">Available Filipino Channels</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredChannels.map((channel) => (
                <Card key={channel.id} className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
                          <span className="text-xs font-medium text-red-400 uppercase tracking-wide">LIVE</span>
                        </div>
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                          {channel.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" />
                        {channel.viewers.toLocaleString()}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:gradient-text transition-colors">
                        {channel.name}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{channel.description}</p>
                    </div>
                    
                    <Button 
                      onClick={() => handleChannelSelect(channel.id)}
                      className="w-full group-hover:scale-105 transition-transform"
                      variant="outline"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Quick Play
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {filteredChannels.length} of {channels.length} channels {searchQuery ? `matching "${searchQuery}"` : 'available'}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center space-y-4 text-sm text-muted-foreground">
          <p>
            For more information, visit{" "}
            <a 
              href="https://github.com/your-repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              our GitHub repository
            </a>
          </p>
          <p>
            If you like this project, you can{" "}
            <a 
              href="#" 
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              <Star className="w-3 h-3" />
              star it on GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Video Player Modal */}
      <Dialog open={!!selectedChannel} onOpenChange={() => setSelectedChannelId(null)}>
        <DialogContent className="max-w-6xl w-full h-[80vh] p-0">
          {selectedChannel && (
            <VideoPlayer
              channelName={selectedChannel.name}
              streamUrl={selectedChannel.streamUrl}
              channelId={selectedChannel.id}
              onBack={() => setSelectedChannelId(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};