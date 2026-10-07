// Site-wide settings. Build-time only: nothing here reaches the browser except what a page renders.

// Sign in link to the app's public login page. Stays off until the planner confirms the app's
// login throttle is on production. Turn on with SHOW_SIGN_IN=true at build time.
export const SHOW_SIGN_IN = process.env.SHOW_SIGN_IN === 'true';
export const SIGN_IN_URL = 'https://app.sermount.com/login';

export const PLAUSIBLE_DOMAIN = 'sermount.com';
export const CONTACT_EMAIL = 'sermountapp@gmail.com';

// Web3Forms. The access key is public by design: it only tells Web3Forms which inbox to email.
// Create it at web3forms.com with the contact address above and paste it here.
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
export const WEB3FORMS_ACCESS_KEY = 'a4f8b89b-646a-4d63-94e8-115fc1ced8f6';
export const SITE_URL = 'https://sermount.com';

// A page appears in the header, footer and sitemap only once it is built.
export const PAGES = [
  { path: '/how-it-works', label: 'How it works', nav: true, built: true },
  { path: '/blog', label: 'Blog', nav: true, built: false },
  { path: '/about', label: 'About', nav: true, built: false },
  { path: '/pricing', label: 'Beta', nav: false, built: true },
  { path: '/contact', label: 'Contact', nav: false, built: true },
  { path: '/terms', label: 'Terms', nav: false, built: true, index: false },
  { path: '/privacy', label: 'Privacy', nav: false, built: true, index: false },
] as const;

export const BETA_PATH = '/pricing';
export const builtPages = PAGES.filter((p) => p.built);
// Placeholder pages are built but kept out of search until their real text exists.
export const indexedPages = builtPages.filter((p) => !('index' in p) || p.index !== false);
export const betaBuilt = PAGES.some((p) => p.path === BETA_PATH && p.built);
