export interface Channel {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  description: string;
  streamUrl: string;
  isLive: boolean;
  viewers: number;
}

export const channels: Channel[] = [
  {
    id: "jeepney-tv",
    name: "Jeepney TV",
    category: "entertainment",
    thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop&crop=center",
    streamUrl: "https://abslive.akamaized.net/dash/live/2028025/jeepneytv/manifest.mpd",
    isLive: true,
    viewers: 15420
  },
  {
    id: "a2z",
    name: "A2Z",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/pRwyOMP.png",
    streamUrl: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
    isLive: false,
    viewers: 25340
  },
  {
    id: "abc-australia",
    name: "ABC Australia",
    category: "news",
    thumbnail: "https://i.imgur.com/480rU5C.png",
    streamUrl: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
    isLive: true,
    viewers: 12890
  },
  {
    id: "animal-planet",
    name: "Animal Planet",
    category: "entertainment",
    thumbnail: "https://api.discovery.com/v1/images/5bc91c366b66d1494068339e?aspectRatio=1x1&width=192&key=3020a40c2356a645b4b4",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
    isLive: true,
    viewers: 16750
  },
  {
    id: "animax",
    name: "Animax",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/VLlyHhT.png",
    streamUrl: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
    isLive: true,
    viewers: 19230
  },
  {
    id: "Ani-One",
    name: "Ani One",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/VLlyHhT.png",
    streamUrl: "https://amg19223-amg19223c9-amgplt0019.playout.now3.amagi.tv/playlist/amg19223-amg19223c9-amgplt0019/playlist.m3u8",
    isLive: true,
    viewers: 19230
  },
  {
    id: "Rakuten-viki",
    name: "Rakuten Viki",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/VLlyHhT.png",
    streamUrl: "https://jmp2.uk/rok-c4bdfe6fd751590e9d096b5de264bba1.m3u8",
    isLive: true,
    viewers: 19230
  },
  {
    id: "Ani-One",
    name: "Ani One",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/VLlyHhT.png",
    streamUrl: "https://amg18481-amg18481c1-amgplt0352.playout.now3.amagi.tv/playlist/amg18481-amg18481c1-amgplt0352/playlist.m3u8",
    isLive: true,
    viewers: 19230
  },
  {
    id: "blast-sports",
    name: "Blast Sports",
    category: "sports",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop&crop=center",
    streamUrl: "https://amg19223-amg19223c1-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c1-amgplt0351/playlist.m3u8",
    isLive: true,
    viewers: 14580
  }
];
