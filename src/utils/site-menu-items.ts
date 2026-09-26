export type SiteMenuItem = {
  index: number;
  name: string;
  href: string;
};

// Edit the label, order, or destination here. Hash links target homepage sections.
export const siteMenuItems: SiteMenuItem[] = [
  { index: 1, name: "Projects", href: "#projects" },
  { index: 2, name: "About", href: "#about" },
  { index: 3, name: "Contacts", href: "#contacts" },
];
