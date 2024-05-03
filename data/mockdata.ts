interface NavbarItem {
  title: string;
  href: string;
  active: boolean;
}

interface SocialMediaItem {
  title: string;
  iconPath: string;
  href: string;
}

export const navbarItems: NavbarItem[] = [
  {
    title: "Creon Pass",
    href: "#",
    active: true,
  },
  {
    title: "Token",
    href: "#",
    active: false,
  },
  {
    title: "AI Revenue",
    href: "#",
    active: false,
  },
  {
    title: "AI Launchpad",
    href: "#",
    active: false,
  },
];

export const socialMediaItems: SocialMediaItem[] = [
  {
    title: "Telegram",
    iconPath: "telegram.svg",
    href: "#",
  },
  {
    title: "Discord",
    iconPath: "discord.svg",
    href: "#",
  },
  {
    title: "Twitter",
    iconPath: "twitter.svg",
    href: "#",
  },
];
