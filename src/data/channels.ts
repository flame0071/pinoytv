export interface Channel {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  streamUrl: string;
  isLive: boolean;
}

export const channels: Channel[] = [
  {
    id: "jeepney-tv",
    name: "Jeepney TV",
    category: "entertainment",
    thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop&crop=center",
    streamUrl: "https://abslive.akamaized.net/dash/live/2028025/jeepneytv/manifest.mpd",
    isLive: true,
  },
  {
    id: "a2z",
    name: "A2Z",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/pRwyOMP.png",
    streamUrl: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
    isLive: true
  },
  {
    id: "abc-australia",
    name: "ABC Australia",
    category: "news",
    thumbnail: "https://i.imgur.com/480rU5C.png",
    streamUrl: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
    isLive: true
  },
  {
    id: "animal-planet",
    name: "Animal Planet",
    category: "entertainment",
    thumbnail: "https://api.discovery.com/v1/images/5bc91c366b66d1494068339e?aspectRatio=1x1&width=192&key=3020a40c2356a645b4b4",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
    isLive: true
  },
  {
    id: "animax",
    name: "Animax",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/VLlyHhT.png",
    streamUrl: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
    isLive: true
  },
  {
    id: "blast-sports",
    name: "Blast Sports",
    category: "sports",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop&crop=center",
    streamUrl: "https://amg19223-amg19223c1-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c1-amgplt0351/playlist.m3u8",
    isLive: true
  }
];
