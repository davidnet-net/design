import fs from 'fs';
import path from 'path';

const CONTENT_DIR = './src/routes';
const OUTPUT = './static/search-index.json';

// ✅ Get only +page.svelte files
function getAllPageFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllPageFiles(fullPath));
    } else if (entry.name === '+page.svelte') {
      files.push(fullPath);
    }
  }

  return files;
}

function extractContent(content) {
  let title = '';
  let description = '';

  // <title> in <svelte:head>
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) {
    title = titleMatch[1].trim();
  }

  // <meta name="description">
  const metaMatch = content.match(
    /<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/i
  );
  if (metaMatch) {
    description = metaMatch[1].trim();
  }

  // Headings
  const headings = [...content.matchAll(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi)].map(
    m => m[1].trim()
  );

  // Paragraphs
  const paragraphs = [...content.matchAll(/<p[^>]*>(.*?)<\/p>/gi)].map(m =>
    m[1].replace(/<[^>]+>/g, '').trim()
  );

  return {
    title,
    description,
    body: headings.concat(paragraphs).join(' ')
  };
}

const files = getAllPageFiles(CONTENT_DIR);

const index = files.map(file => {
  // Clean slug: keep path relative to routes, drop "+page.svelte"
  const slug = file
    .replace(CONTENT_DIR, '')
    .replace('/+page.svelte', '') || '/';

  const raw = fs.readFileSync(file, 'utf-8');
  const meta = extractContent(raw);

  return {
    id: slug,
    title: meta.title,
    description: meta.description,
    body: meta.body
  };
});

fs.writeFileSync(OUTPUT, JSON.stringify(index, null, 2));
console.log(`✅ Wrote index for ${index.length} pages to ${OUTPUT}`);
