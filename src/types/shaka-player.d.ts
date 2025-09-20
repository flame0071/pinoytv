// Type definitions for shaka-player
declare module 'shaka-player/dist/shaka-player.ui.js' {
  interface ShakaPlayer {
    configure(config: any): void;
    load(uri: string): Promise<void>;
    destroy(): Promise<void>;
    addEventListener(type: string, listener: (event: any) => void): void;
    removeEventListener(type: string, listener: (event: any) => void): void;
  }

  interface Polyfill {
    installAll(): void;
  }

  const shaka: {
    Player: {
      new (video: HTMLVideoElement): ShakaPlayer;
      isBrowserSupported(): boolean;
    };
    polyfill: Polyfill;
  };

  export default shaka;
}