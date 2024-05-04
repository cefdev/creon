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

export interface ComingSoonCardTypes {
  title: string;
  subtitle: string;
  imagePath: string;
  imageAlt: string;
  description: string;
  active: boolean;
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

export const comingSoonCards: ComingSoonCardTypes[] = [
  {
    title: "token",
    subtitle: "The Gateway token to the world of AI",
    imagePath: "token.png",
    imageAlt: "token image",
    description:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    active: false,
  },
  {
    title: "revenue",
    subtitle: "Driving income and growth through decentralization",
    imagePath: "revenue.png",
    imageAlt: "revenue image",
    description:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
    active: false,
  },
  {
    title: "launchpad",
    subtitle: "Driving the future of AI Innovation",
    imagePath: "launchpad.png",
    imageAlt: "launchpad image",
    description:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    active: false,
  },
];
