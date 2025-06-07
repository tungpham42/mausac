export {}; // Required to make this a module

declare global {
  interface EyeDropper {
    open: () => Promise<{ sRGBHex: string }>;
  }

  interface Window {
    EyeDropper?: {
      new (): EyeDropper;
    };
  }
}
