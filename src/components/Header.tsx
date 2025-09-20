import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Tv, Menu, X, ArrowLeft } from "lucide-react";

interface HeaderProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  selectedCategory: string;
  onBackToLanding?: () => void;
}

const categories = [
  { id: "all", name: "Lahat", count: 25 },
  { id: "news", name: "Balita", count: 8 },
  { id: "entertainment", name: "Entertainment", count: 12 },
  { id: "sports", name: "Sports", count: 5 },
];

export const Header = ({ onSearch, onCategoryFilter, selectedCategory, onBackToLanding }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border/30 shadow-card">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Header */}
        <div className="flex items-center justify-between">
          {/* Logo & Back Button */}
          <div className="flex items-center gap-3 animate-fade-in">
            {onBackToLanding && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBackToLanding}
                className="p-2 hover:bg-card"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <div className="bg-gradient-warm p-3 rounded-xl shadow-elegant animate-float">
              <Tv className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text tracking-tight">
                PinoyTV
              </h1>
              <p className="text-xs text-accent font-medium">Live Streaming</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Maghanap ng channel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/60 border-border/40 focus:bg-card focus:border-primary/50 focus:ring-2 focus:ring-primary/20 backdrop-blur-sm transition-all duration-300"
              />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Live Indicator - Desktop */}
          <div className="hidden md:flex items-center gap-2 bg-gradient-warm/10 px-3 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full live-pulse" />
            <span className="text-sm font-bold text-primary tracking-wide">LIVE</span>
          </div>
        </div>

        {/* Category Filters - Desktop */}
        <div className="hidden md:flex items-center gap-3 mt-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "secondary"}
              size="sm"
              onClick={() => onCategoryFilter(category.id)}
              className={`flex items-center gap-2 transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-gradient-warm shadow-elegant text-white font-bold" 
                  : "hover:bg-card hover:shadow-card button-glow"
              }`}
            >
              {category.name}
              <Badge 
                variant="secondary" 
                className={`text-xs transition-all ${
                  selectedCategory === category.id 
                    ? "bg-white/20 text-white" 
                    : "bg-accent/20 text-accent"
                }`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t border-border/50 pt-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Maghanap ng channel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </form>

            {/* Mobile Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "secondary"}
                  size="sm"
                  onClick={() => {
                    onCategoryFilter(category.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  {category.name}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Mobile Live Indicator */}
            <div className="flex items-center gap-2 justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-red-400">LIVE</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};