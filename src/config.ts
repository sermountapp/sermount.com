// Site-wide settings. Build-time only: nothing here reaches the browser except what a page renders.

// Sign in link to the app's public login page. Stays off until the planner confirms the app's
// login throttle is on production. Turn on with SHOW_SIGN_IN=true at build time.
export const SHOW_SIGN_IN = process.env.SHOW_SIGN_IN === 'true';
export const SIGN_IN_URL = 'https://app.sermount.com/login';

export const PLAUSIBLE_DOMAIN = 'sermount.com';
export const CONTACT_EMAIL = 'sermountapp@gmail.com';

// A page appears in the header, footer and sitemap only once it is built.
export const PAGES = [
  { path: '/how-it-works', label: 'How it works', nav: true, built: true },
  { path: '/blog', label: 'Blog', nav: true, built: false },
  { path: '/about', label: 'About', nav: true, built: false },
  { path: '/pricing', label: 'Beta', nav: false, built: false },
  { path: '/contact', label: 'Contact', nav: false, built: false },
  { path: '/terms', label: 'Terms', nav: false, built: false },
  { path: '/privacy', label: 'Privacy', nav: false, built: false },
] as const;

export const BETA_PATH = '/pricing';
export const builtPages = PAGES.filter((p) => p.built);
export const betaBuilt = PAGES.some((p) => p.path === BETA_PATH && p.built);
