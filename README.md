# Curtis Nye — Personal Portfolio

Personal portfolio site for [Curtis Nye](https://github.com/cnye36): developer and AI builder. Showcases featured work, skills, and contact links in a fast, static Next.js app.

## Features

- **Home** — Hero, skills, featured projects, and contact section
- **Projects** — Full project grid with status badges (live, in progress, archived)
- **Responsive layout** — Mobile nav, sticky header, dark theme
- **SEO** — Page metadata and Open Graph tags via the App Router

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Geist](https://vercel.com/font) via `next/font`

## Project Structure

```
app/
  layout.tsx      # Root layout, fonts, metadata
  page.tsx        # Home page
  projects/       # Projects listing
  globals.css     # Global styles
components/
  Navbar.tsx      # Site navigation
  Footer.tsx      # Footer with social links
  ProjectCard.tsx # Project card UI
  SocialLinks.tsx # GitHub & LinkedIn links
lib/
  projects.ts     # Project data (single source of truth)
public/
  projects/       # Project screenshot images
scripts/
  capture-project-screenshots.mjs  # Optional Playwright screenshot tool
```

## Getting Started

**Requirements:** Node.js 20+, [pnpm](https://pnpm.io)

```bash
git clone https://github.com/cnye36/curtis-personal-portfolio.git
cd curtis-personal-portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Start development server |
| `pnpm build`   | Production build         |
| `pnpm start`   | Serve production build   |
| `pnpm lint`    | Run ESLint               |

## Adding or Updating Projects

Edit `lib/projects.ts`. Each project needs:

- `slug` — Unique identifier (used for image filenames)
- `title`, `description`, `tags`, `href`
- `image` — Path under `public/projects/` (e.g. `/projects/my-app.png`)
- `featured` — `true` to show on the home page
- `status` — `"live"` | `"in-progress"` | `"archived"`
- `github` — Optional GitHub repo URL

After adding an image, place the screenshot in `public/projects/`.

### Regenerating screenshots (optional)

A Playwright script captures project thumbnails from live URLs:

```bash
pnpm exec playwright install chromium   # first time only
node scripts/capture-project-screenshots.mjs
```

Update the `targets` array in the script when URLs or slugs change. Playwright is not a project dependency; install it globally or ad hoc when you run the script.

## Deployment

Built for [Vercel](https://vercel.com) (or any Node host that supports Next.js):

```bash
pnpm build
```

Connect the GitHub repo in Vercel for automatic deploys on push to `main`.

## License

Private — all rights reserved.
