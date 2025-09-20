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
    description: "The best in Filipino entertainment, comedy shows, at mga klasikong pelikula.",
    streamUrl: "https://abslive.akamaized.net/dash/live/2028025/jeepneytv/manifest.mpd",
    isLive: true,
    viewers: 15420
  },
  {
    id: "abs-cbn-news",
    name: "ABS-CBN News",
    category: "news",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&crop=center",
    description: "Pinakabagong balita mula sa Pilipinas at sa buong mundo. 24/7 news coverage.",
    streamUrl: "https://example.com/abscbn-news.m3u8",
    isLive: true,
    viewers: 28950
  },
  {
    id: "gma-network",
    name: "GMA Network",
    category: "entertainment",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
    description: "Kapuso network na naghahatid ng mga sikat na teleserye at variety shows.",
    streamUrl: "https://example.com/gma-network.m3u8",
    isLive: true,
    viewers: 32100
  },
  {
    id: "tv5",
    name: "TV5",
    category: "entertainment",
    thumbnail: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=300&fit=crop&crop=center",
    description: "Kapatid network na nagbibigay ng quality entertainment para sa buong pamilya.",
    streamUrl: "https://example.com/tv5.m3u8",
    isLive: true,
    viewers: 18750
  },
  {
    id: "pba-rush",
    name: "PBA Rush",
    category: "sports",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&crop=center",
    description: "Live PBA games, highlights, at mga dating laro ng mga Pinoy basketball legends.",
    streamUrl: "https://example.com/pba-rush.m3u8",
    isLive: true,
    viewers: 22340
  },
  {
    id: "cnn-philippines",
    name: "CNN Philippines",
    category: "news",
    thumbnail: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=300&fit=crop&crop=center",
    description: "International at local news coverage na may kredibilidad at accuracy.",
    streamUrl: "https://example.com/cnn-ph.m3u8",
    isLive: true,
    viewers: 19820
  },
  {
    id: "net25",
    name: "NET25",
    category: "entertainment",
    thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop&crop=center",
    description: "Entertainment at educational programs para sa Pinoy viewers.",
    streamUrl: "https://example.com/net25.m3u8",
    isLive: true,
    viewers: 8930
  },
  {
    id: "one-sports",
    name: "One Sports",
    category: "sports",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    description: "Sports programming kasama ang basketball, football, at iba pang sports.",
    streamUrl: "https://example.com/one-sports.m3u8",
    isLive: true,
    viewers: 16540
  },
  {
    id: "myx",
    name: "MYX",
    category: "entertainment",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
    description: "Pinoy music channel na nagfe-feature ng mga sikat na OPM artists at international hits.",
    streamUrl: "https://example.com/myx.m3u8",
    isLive: true,
    viewers: 12750
  },
  {
    id: "gma-news-tv",
    name: "GMA News TV",
    category: "news",
    thumbnail: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=300&fit=crop&crop=center",
    description: "24 oras na balita at current affairs programs mula sa GMA Network.",
    streamUrl: "https://example.com/gma-news-tv.m3u8",
    isLive: true,
    viewers: 21680
  },
  {
    id: "cinema-one",
    name: "Cinema One",
    category: "entertainment",
    thumbnail: "https://images.unsplash.com/photo-1489599743092-c1fa74d3ddfc?w=400&h=300&fit=crop&crop=center",
    description: "Premium movie channel na nag-aair ng mga Pinoy films at international movies.",
    streamUrl: "https://example.com/cinema-one.m3u8",
    isLive: true,
    viewers: 14320
  },
  {
    id: "solar-sports",
    name: "Solar Sports",
    category: "sports",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&crop=center",
    description: "Sports entertainment na nag-cover ng mga international at local sports events.",
    streamUrl: "https://example.com/solar-sports.m3u8",
    isLive: true,
    viewers: 18950
  },
  {
    id: "a2z",
    name: "A2Z",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/pRwyOMP.png",
    description: "A2Z Channel - Entertainment programming para sa buong pamilya.",
    streamUrl: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
    isLive: true,
    viewers: 25340
  },
  {
    id: "abc-australia",
    name: "ABC Australia",
    category: "news",
    thumbnail: "https://i.imgur.com/480rU5C.png",
    description: "ABC Australia - International news at documentaries from Australia.",
    streamUrl: "https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd",
    isLive: true,
    viewers: 12890
  },
  {
    id: "animal-planet",
    name: "Animal Planet",
    category: "entertainment",
    thumbnail: "https://api.discovery.com/v1/images/5bc91c366b66d1494068339e?aspectRatio=1x1&width=192&key=3020a40c2356a645b4b4",
    description: "Animal Planet - Wildlife documentaries at nature programming.",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
    isLive: true,
    viewers: 16750
  },
  {
    id: "animax",
    name: "Animax",
    category: "entertainment",
    thumbnail: "https://i.imgur.com/VLlyHhT.png",
    description: "Animax - Anime programming at Japanese animation series.",
    streamUrl: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
    isLive: true,
    viewers: 19230
  },
  {
    id: "blast-sports",
    name: "Blast Sports",
    category: "sports",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop&crop=center",
    description: "Blast Sports - Action-packed sports programming at exciting matches.",
    streamUrl: "https://amg19223-amg19223c1-amgplt0351.playout.now3.amagi.tv/playlist/amg19223-amg19223c1-amgplt0351/playlist.m3u8",
    isLive: true,
    viewers: 14580
  }
];