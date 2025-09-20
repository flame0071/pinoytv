import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { ChannelGrid } from "@/components/ChannelGrid";
import { VideoPlayer } from "@/components/VideoPlayer";
import { SettingsInterface } from "@/components/SettingsInterface";
import { channels } from "@/data/channels";
import heroImage from "@/assets/iptv-hero.jpg";

const Index = () => {
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showChannels, setShowChannels] = useState(false);

  const selectedChannel = channels.find(channel => channel.id === selectedChannelId);

  const filteredChannels = useMemo(() => {
    return channels.filter(channel => {
      const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          channel.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || channel.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleChannelSelect = (channelId: string) => {
    setSelectedChannelId(channelId);
  };

  const handleBackToChannels = () => {
    setSelectedChannelId(null);
  };

  const handleShowChannels = () => {
    setShowChannels(true);
  };

  const handleBackToLanding = () => {
    setShowChannels(false);
    setSelectedChannelId(null);
    setSearchQuery("");
    setSelectedCategory("all");
  };

  // Show settings interface by default
  if (!showChannels && !selectedChannelId) {
    return (
      <SettingsInterface
        onChannelSelect={(channelId) => {
          setSelectedChannelId(channelId);
          setShowChannels(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-iptv-hero">
      <Header
        onSearch={setSearchQuery}
        onCategoryFilter={setSelectedCategory}
        selectedCategory={selectedCategory}
        onBackToLanding={handleBackToLanding}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-16 rounded-3xl overflow-hidden shadow-elegant animate-fade-in">
          <div className="relative h-96 md:h-[500px] bg-gradient-hero">
            <img 
              src={heroImage} 
              alt="PinoyTV Hero" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-hero" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-3xl animate-fade-in">
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                    Pinoy<span className="gradient-text">TV</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed font-medium">
                    Manood ng inyong mga paboritong Filipino channels nang live. 
                    Balita, entertainment, sports - lahat nandito na!
                  </p>
                  <div className="flex items-center gap-6 text-white/90">
                    <div className="flex items-center gap-3 bg-gradient-warm/20 px-4 py-2 rounded-full backdrop-blur-sm border border-primary/30">
                      <div className="w-3 h-3 bg-red-500 rounded-full live-pulse" />
                      <span className="font-bold tracking-wide">LIVE NOW</span>
                    </div>
                    <div className="h-6 w-px bg-white/40" />
                    <span className="font-semibold text-accent">{channels.length} Available Channels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player Section */}
        {selectedChannel && (
          <div className="mb-8 animate-fade-in">
            <VideoPlayer
              channelName={selectedChannel.name}
              streamUrl={selectedChannel.streamUrl}
              channelId={selectedChannel.id}
              onBack={() => setSelectedChannelId(null)}
            />
          </div>
        )}

        {/* Channels Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between animate-fade-in">
            <h2 className="text-3xl font-black gradient-text">
              {selectedChannel ? "Iba pang mga Channel" :
               searchQuery ? `Search Results for "${searchQuery}"` : 
               selectedCategory === "all" ? "Lahat ng Channels" : 
               selectedCategory === "news" ? "Balita" :
               selectedCategory === "entertainment" ? "Entertainment" : "Sports"}
            </h2>
            <div className="text-accent font-semibold bg-gradient-cool/10 px-4 py-2 rounded-full border border-accent/20">
              {filteredChannels.length} channel{filteredChannels.length !== 1 ? 's' : ''}
            </div>
          </div>

          <ChannelGrid
            channels={selectedChannel ? channels.filter(channel => channel.id !== selectedChannel.id) : filteredChannels}
            onChannelSelect={handleChannelSelect}
          />
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gradient-warm/20 text-center">
          <div className="bg-gradient-warm/5 p-8 rounded-2xl border border-border/30 backdrop-blur-sm">
            <p className="gradient-text font-bold text-lg tracking-wide">
              &copy; 2024 PinoyTV. Para sa mga Pinoy sa buong mundo.
            </p>
            <p className="text-accent/80 mt-2 font-medium">
              Connecting Filipino hearts worldwide through quality streaming
            </p>
          </div>
        </footer>
      </main>

    </div>
  );
};

export default Index;
