import { ChannelCard } from "./ChannelCard";

interface Channel {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  description: string;
  streamUrl: string;
  isLive: boolean;
  viewers: number;
}

interface ChannelGridProps {
  channels: Channel[];
  onChannelSelect: (channelId: string) => void;
}

export const ChannelGrid = ({ channels, onChannelSelect }: ChannelGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {channels.map((channel) => (
        <ChannelCard
          key={channel.id}
          id={channel.id}
          name={channel.name}
          category={channel.category}
          thumbnail={channel.thumbnail}
          description={channel.description}
          isLive={channel.isLive}
          viewers={channel.viewers}
          onClick={onChannelSelect}
        />
      ))}
    </div>
  );
};