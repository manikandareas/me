<div align="center">
<img alt="Portfolio" src="https://github.com/dillionverma/portfolio/assets/16860528/57ffca81-3f0a-4425-b31d-094f61725455" width="90%">
</div>

# Portfolio [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdillionverma%2Fportfolio)

Built with next.js, [shadcn/ui](https://ui.shadcn.com/), and [magic ui](https://magicui.design/), deployed on Vercel.

# Features

- Setup only takes a few minutes by editing the [single config file](./src/data/resume.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/UI, TailwindCSS, Framer Motion, Magic UI
- Includes a blog
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dillionverma/portfolio
   ```

2. Move to the cloned directory

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the local Server:

   ```bash
   pnpm dev
   ```

5. Open the [Config file](./src/data/resume.tsx) and make changes

## Studio landing page

The Studio landing page lives in `src/app/studio/page.tsx`. Preview it locally at
`http://localhost:3000/studio` after starting the development server.

Its typographic hero uses `src/components/ui/handwriting-text.tsx`, with Studio
content in `src/components/studio/studio-hero.tsx`. The component traces font
contours and then fills the lettering, with a readable fallback and reduced-motion
support. The supplied Shadows Into Light font is self-hosted in
`public/fonts/studio` with its OFL license; opentype.js 1.3.4 is self-hosted in
`public/vendor/opentype` with its MIT license. Both originate from the supplied
component's CDN URLs. The image-stream component remains available for reuse.
The project already includes TypeScript, Tailwind CSS v4, and shadcn/ui;
UI components resolve through `@/components/ui` to `src/components/ui`, and global
styles live in `src/app/globals.css`. Keep reusable UI in this configured folder
so application imports and the shadcn CLI resolve the same components.

The shared root layout only supplies the document structure and global styles.
Portfolio routes live in `src/app/(portfolio)` and use `PortfolioShell` for their
fonts, decorative grid, content width, theme provider, and navigation. Studio has
its own `src/app/studio/layout.tsx`, so its typography, spacing, and page width are
independent. The route group does not change the portfolio or blog URLs.

In production, `next.config.mjs` rewrites `/` to `/studio` only when the hostname
is `studio.whoismanik.dev`. The browser keeps the subdomain URL, and the portfolio
continues to use the main domain. Both pages share the same Next.js application
and Vercel deployment.

Hosting configuration:

- Vercel project: `ngertiin-corp/me`, with `studio.whoismanik.dev` added as a domain.
- Cloudflare DNS: `A` record named `studio`, pointing to `76.76.21.21`, with proxy
  status **DNS only** and TTL **Auto**, as recommended by Vercel CLI during setup.

To verify the hostname rewrite locally, run:

```bash
curl -H 'Host: studio.whoismanik.dev' http://localhost:3000/
```

# License

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md).
