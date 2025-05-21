export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blazer",
  description:
    "Empresa dedicada a servicios de andamios y mantenimiento de edificios.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Servicios",
      href: "/servicios",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Servicios",
      href: "/servicios",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
