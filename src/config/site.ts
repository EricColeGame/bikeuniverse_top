export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Bike Universe Wiki",
  shortName: "Bike Universe",
  logoText: "B",
  tagline: "Guides, Codes, Bikes & Stunts",
  description: "Your complete Bike Universe guide on Roblox: beginner tips, bikes, controls, tricks, codes, and progression.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bikeuniverse.top",
  supportEmail: "support@bikeuniverse.top",
  gameUrl: "https://www.roblox.com/search/experiences?keyword=Bike+Universe",
  heroVideoId: "5nvK9ktqLMk", // Bike Universe full gameplay guide
  social: {
    discord: "https://www.reddit.com/search/?q=Bike+Universe",
    youtube: "https://www.youtube.com/results?search_query=Bike+Universe+Gameplay",
  },
  locales: ["en", "es", "pt-BR", "de"],
  defaultLocale: "en",
};
