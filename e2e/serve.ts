// Static file server for the end-to-end tests: serves the repository root so
// the fixture page can load dist/hacs-nerdo-ux.js over HTTP.
import { resolve, sep } from 'node:path';

const root = resolve(import.meta.dir, '..');
const port = Number(Bun.env.PORT ?? 4173);

Bun.serve({
  port,
  async fetch(request) {
    const path = resolve(root, `.${decodeURIComponent(new URL(request.url).pathname)}`);
    if (path !== root && !path.startsWith(root + sep)) {
      return new Response('Forbidden', { status: 403 });
    }
    const file = Bun.file(path);
    return (await file.exists()) ? new Response(file) : new Response('Not found', { status: 404 });
  },
});

console.log(`Serving ${root} at http://localhost:${port}`);
