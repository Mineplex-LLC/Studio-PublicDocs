import { PageRoutes } from "@/lib/pageroutes";

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Login",
    href: "https://studio.mineplex.com/login",
    external: true,
  },
  {
    title: "Contact Support",
    href: "mailto:support@mineplex.com",
    external: true,
  }
];

export const GitHubLink = {
  href: "https://github.com/Mineplex-LLC/Studio-PublicDocs",
};