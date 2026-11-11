# CLAUDE.md — ravic.dev

Guidance for Claude Code (and humans) working in this repo. See `PRD.md` for the full product spec.

## What this is

Personal website for **Vijay Ravichandran** (Freelance AI Engineer & Technical Architect, Munich). Static **Astro** site, hosted free on **GitHub Pages**, that also serves as an AI-discoverable "home base". Design is ported from an imported Claude Design project — keep the visual language intact.

## Stack

- **Astro** (static output) + **Tailwind CSS** (`@astrojs/tailwind`)
- **`@astrojs/sitemap`** for the sitemap
- TypeScript for data files
- No backend, no client framework, minimal JS. **Content must live in static HTML** (crawler requirement).

## Run / build

```bash
npm install      # first time
npm run dev      # local dev server (http://localhost:4321)
npm run build    # production build → dist/
npm run preview  # serve the built site
```

## Project structure

```
src/
  layouts/BaseLayout.astro     # <head>, meta/OG, JSON-LD slot, Nav + Footer
  components/
    Nav.astro                  # Home · Projects · About · Writing↗
    Footer.astro               # email + socials (entity-consistency links)
    ProjectCard.astro          # ported from ProjectCard.dc.html; links to /projects/[slug]
    JsonLd.astro               # renders a JSON-LD <script> from a passed object
  data/
    site.ts                    # name, role, email, socials, substack, availability  ← edit identity here
    projects.ts                # typed projects array  ← add/edit projects here
  pages/
    index.astro                # Home
    projects.astro             # Projects grid
    projects/[slug].astro      # Project detail (getStaticPaths over projects.ts)
    about.astro                # Bio + experience + skills
public/
  robots.txt                   # allows AI crawlers + points to sitemap
  llms.txt                     # plain-markdown summary for LLMs
  CNAME                        # ravic.dev
.github/workflows/deploy.yml   # build + deploy to GitHub Pages on push to main
```

## Common edits

- **Add / edit a project:** append an entry to `src/data/projects.ts`. For a live app, set `type: 'app'` and `url`. For a write-up, set `type: 'writeup'`. Cards, detail pages, sitemap, and JSON-LD all update automatically.
- **Update identity / links:** edit `src/data/site.ts` (name, role, email, LinkedIn/GitHub/Substack URLs, availability text). These feed nav, footer, JSON-LD `sameAs`, and `llms.txt`.
- **Set the Substack URL:** replace the TODO placeholder in `src/data/site.ts` → it propagates to the Writing nav link, Home writing section, footer, and llms.txt.
- **Set the GitHub URL:** same — replace the TODO placeholder in `src/data/site.ts`.
- **Swap the profile photo:** drop an image in `public/`, then point the hero at it in `index.astro` (replaces the "VR" initials placeholder).

## Design language (do not drift)

- Background `#EFEDE4` · text `#1C1A16` · teal accent `#0E7C73` · dark-green footer `#122E29`.
- Fonts: **Newsreader** (serif headings), **Hanken Grotesk** (sans body), **JetBrains Mono** (eyebrows/labels/meta).
- Sticky blurred header; rounded white cards with gradient covers; mono uppercase eyebrows with a short rule.

## Discoverability conventions (must preserve)

1. Keep real content in static HTML — never gate text behind client JS.
2. Every page sets a unique `title` + `description` and OG/Twitter tags via `BaseLayout`.
3. Maintain `Person` JSON-LD with `sameAs` → GitHub/Substack/LinkedIn, and per-project schema.
4. Keep `public/robots.txt` allowing AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) + sitemap line.
5. Keep `public/llms.txt` in sync when projects/identity/availability change.
6. Keep name/role/links identical across content, footer, and JSON-LD (entity consistency).

## Deploy & DNS

- Push to `main` → GitHub Action builds and deploys to Pages.
- `astro.config.mjs` sets `site: 'https://ravic.dev'`.
- `public/CNAME` holds the apex domain.
- DNS: apex `ravic.dev` → GitHub Pages A/AAAA records; `www` → CNAME `vjravi.github.io`. Enable HTTPS in Pages settings after DNS propagates.
- **Apps on subdomains** (e.g. `app1.ravic.dev`) are separate per-app deployments on their own servers; add an A record per app and link to it from `projects.ts`.

## Current TODOs

- Replace Substack URL placeholder in `src/data/site.ts`.
- Replace GitHub URL placeholder in `src/data/site.ts`.
- Optional: add a real profile photo.
