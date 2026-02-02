import config from "../content/config/site.json";

export interface NavItem {
  label: string;
  link: string;
  isHome?: boolean;
}

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  siteOwner: string;
  contactEmail?: string;
  location?: string;
  nav: NavItem[];
}

export function getSiteConfig(): SiteConfig {
  return config as SiteConfig;
}
