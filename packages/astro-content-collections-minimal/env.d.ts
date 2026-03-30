declare module "virtual:astro-content-collections-minimal/config" {
  const config: import("./index").ContentCollectionsMinimalConfig;
  export default config;
}

declare module "virtual:astro-content-collections-minimal/styles" {}

declare module "virtual:astro-content-collections-minimal/components/Footer" {
  const Footer: typeof import("./components/Footer.astro").default;
  export default Footer;
}

declare module "virtual:astro-content-collections-minimal/components/Header" {
  const Header: typeof import("./components/Header.astro").default;
  export default Header;
}

declare module "virtual:astro-content-collections-minimal/components/Layout" {
  const Layout: typeof import("./components/Layout.astro").default;
  export default Layout;
}
