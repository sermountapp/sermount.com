import type { APIRoute } from 'astro';
import { builtPages } from '../config';

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', ...builtPages.map((p) => p.path)];
  const urls = paths
    .map((p) => `  <url><loc>${new URL(p, site).href.replace(/\/$/, p === '/' ? '/' : '')}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
