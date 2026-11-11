# ravic.dev

Personal website for **Vijay Ravichandran** — Freelance AI Engineer & Technical Architect. Static [Astro](https://astro.build) site, hosted on GitHub Pages, designed to be discoverable by both people and AI platforms.

See [`PRD.md`](./PRD.md) for the product spec and [`CLAUDE.md`](./CLAUDE.md) for working notes.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built site
```

## Editing content

| To change… | Edit… |
|---|---|
| Name, role, email, social links, Substack, availability, freelance services | `src/data/site.ts` |
| Projects (add / edit / reorder) | `src/data/projects.ts` |
| Bio, experience, skills, education | `src/data/about.ts` |
| LLM summary | `public/llms.txt` |

**Add a project:** append an entry to `src/data/projects.ts`. For a live app, set `type: 'app'` and `url` — a "Launch app" button appears automatically. For a write-up, set `type: 'writeup'`. Cards, the detail page, the sitemap, and JSON-LD all update from that one entry.

## TODO (placeholders to replace)

- **Substack URL** and **GitHub URL** in `src/data/site.ts` (also referenced in `public/llms.txt`).
- Optional: a real profile photo — drop it in `public/` and point the hero at it in `src/pages/index.astro` (replaces the "VR" initials block).

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages.

One-time setup on GitHub:

1. Create a **public** repo and push this project to `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the first deploy, set the custom domain (it reads `public/CNAME` = `ravic.dev`) and enable **Enforce HTTPS** once DNS resolves.

## DNS

At your domain registrar for `ravic.dev`:

**Apex domain → GitHub Pages** (A + AAAA records):

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
CNAME www vjravi.github.io.
```

**Apps on subdomains** (added per app, later): point each app's subdomain at that app's server.

```
A     app1   <app1 server IP>
A     chat   <chat app server IP>
```

The website only links to these subdomains (from `projects.ts`); each app is deployed and hosted separately (e.g. Hetzner, Hostinger, AWS).

## License

The **source code** (Astro components, layouts, config, build setup) is released under the [MIT License](./LICENSE).

The **personal content is not covered by that license** and remains © Vijay Ravichandran, all rights reserved: the text on the site (bio, experience, project write-ups, services), the profile photo (`public/profile.png`), and the name and likeness. Please don't reuse these without permission. If you fork the site as a template, replace them with your own.
