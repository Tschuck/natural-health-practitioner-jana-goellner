import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import process from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

dotenv.config({ path: [join(root, '.env'), join(root, '.env.default')] });

const distClient = join(root, 'dist', 'client');

const routes = [
  '/',
  '/about-me',
  '/treatments',
  '/treatments/acupuncture',
  '/treatments/hormone-balance',
  '/treatments/psychosomatics',
  '/downloads',
  '/faq',
  '/contact',
  '/imprint',
  '/data-security',
];

const BASE_URL = process.env.VITE_PUBLIC_URL || 'https://heilpraktikerin-jana-goellner.de';
const today = new Date().toISOString().split('T')[0];

function getPriority(route: string) {
  if (route === '/') return '1.0';
  if (route.startsWith('/treatments')) return '0.8';
  return '0.6';
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route === '/' ? '' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

if (!existsSync(distClient)) {
  mkdirSync(distClient, { recursive: true });
}

writeFileSync(join(distClient, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log('Generated sitemap.xml');

writeFileSync(join(distClient, 'robots.txt'), robotsTxt, 'utf-8');
console.log('Generated robots.txt');
