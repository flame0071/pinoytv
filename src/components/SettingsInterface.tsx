import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Play, AlertTriangle, ExternalLink, Star, Tv, Users } from "lucide-react";
import { channels } from "@/data/channels";
import { VideoPlayer } from "@/components/VideoPlayer";

interface SettingsInterfaceProps {
  onChannelSelect?: (channelId: string) => void;
}

export const SettingsInterface = ({ onChannelSelect }: SettingsInterfaceProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("tl");
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);

  const selectedChannel = channels.find(channel => channel.id === selectedChannelId);

  const handleChannelSelect = (channelId: string) => {
    setSelectedChannelId(channelId);
    if (onChannelSelect) {
      onChannelSelect(channelId);
    }
  };

  const languages = [
    { value: "tl", label: "TL | Tagalog" },
    { value: "en", label: "EN | English" },
    { value: "es", label: "ES | Español" },
    { value: "fr", label: "FR | Français" },
    { value: "zh", label: "ZH | 中国人" },
  ];

  const handleQuickPlay = (channelId: string) => {
    onChannelSelect(channelId);
  };

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
          {/* CORS Warning */}
          <Alert className="border-yellow-500/50 bg-yellow-500/10">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <AlertDescription className="text-sm">
              Some channels might not play due to strict CORS policy.{" "}
              <a 
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                More info and how to fix this
                <ExternalLink className="w-3 h-3" />
              </a>
            </AlertDescription>
          </Alert>

          {/* Language Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Language
            </label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Available Channels */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold gradient-text">Available Filipino Channels</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {channels.map((channel) => (
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
                {channels.length} total channels available
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