# Product Requirements — ravic.dev

## 1. Vision & goal

A personal website for **Vijay Ravichandran** at **ravic.dev** that:

1. Establishes a credible, well-designed online presence (profile, projects, writing, contact).
2. Doubles as a **machine-readable "home base"** so AI platforms (ChatGPT, Claude, Perplexity, Google AI Overviews) can discover and accurately describe who he is and what he's built.
3. Signals that he is **available for freelance work** (contract/consulting).

The site is the canonical hub that ties together his external profiles (GitHub, Substack, LinkedIn) so AI systems resolve him as one coherent entity.

## 2. Audience

- **Potential clients** evaluating him for freelance/consulting AI work.
- **Potential hires / collaborators** he might bring on.
- **Recruiters / employers** assessing his background.
- **AI assistants & search engines** indexing and summarizing him.

## 3. Confirmed decisions

| Area | Decision |
|---|---|
| Stack | **Astro** static site (minimal JS, content in static HTML) + Tailwind |
| Hosting | **GitHub Pages**, free, auto-deploy on push. Repo **public**. |
| Design | Ported from imported Claude Design (`Portfolio.dc.html` / `ProjectCard.dc.html`) |
| Nav | Home · Projects · About · **Writing↗** (external Substack) |
| Contact | **Links only** (LinkedIn · GitHub · email) on the **Home** page — no form, no separate Contact page |
| Blog/Writing | Nav link **out to Substack**, opens in a **new tab** |
| Projects | Card grid + per-project detail pages; data-driven; supports `app` (live, links out to subdomain) and `writeup` types |
| Apps | Decoupled — live apps run on their own servers/subdomains; the site only links to them |
| Availability | "Available for freelance projects" — shown to humans + machines |
| Discoverability | Full AI/SEO layer from day one |

## 4. Content source

All copy (bio, role, experience, skills, project case studies) derives from Vijay's CV:

- **Positioning:** Freelance AI Engineer & Technical Architect, 10+ years building production ML systems. Specialties: ASR, Generative AI, cloud scaling. Bridges deep engineering and executive product strategy. Based in Munich.
- **Now:** Independent AI Strategy & Research (2025–2026) — neural networks for scientific simulations; low-latency Small Language Models for privacy-focused, local-first environments.
- **Experience:** Acting CTO @ Digi Sapiens (LaLeTu, "Startup of the Year, Hessen 2024") → Senior SWE (Speech) @ Digi Sapiens → ML Expert @ Wallstreetdocs (text-to-singing spin-off) → Speech Recognition Engineer @ Samsung/Harman (Bixby German, BERT UX analysis) → Software Engineer @ Huawei (telecom portals at scale).
- **Education:** M.Sc. IT, University of Stuttgart; B.Tech EE, NIT Rourkela.
- **Toolkit:** ASR/NLP/LLMs (BERT, GPT)/TTS; microservices, CI/CD, Docker, Kubernetes, Terraform; AWS, Scaleway; Python, Java, C++.
- **Contact:** vijay@ravic.dev · LinkedIn `vijay-ravichandran` · Munich.

## 5. Page-by-page requirements

### Home (`/`)
- Hero: eyebrow **"Freelance AI Engineer & Technical Architect"**, headline, two intro paragraphs, "Work with me" + "View work" CTAs.
- **Availability badge:** "Available for freelance projects".
- **Contact links row:** LinkedIn · GitHub · email.
- Profile-photo placeholder ("VR" initials) — swap real photo later.
- Featured-projects grid.
- Writing section → Substack (new tab).
- `Person` + `WebSite` JSON-LD.

### Projects (`/projects`)
- Full grid of project cards (gradient cover, category chip, stack tags, "View project →").
- `ItemList` JSON-LD.

### Project detail (`/projects/[slug]`)
- Number/category, title, italic blurb, year/role/category meta, cover, description paragraphs, Highlights list, sticky aside (Links: live demo/source/launch; Built-with stack), Next-project link.
- Per-project `CreativeWork`/`SoftwareApplication` JSON-LD.

### About (`/about`)
- Bio paragraphs, Experience timeline, Skills & tools groups. (No duplicate contact block — contact lives on Home.)

## 6. AI / SEO discoverability requirements

- All meaningful content present in **server-rendered static HTML** (not JS-gated).
- **JSON-LD:** `Person` (with `sameAs` → GitHub/Substack/LinkedIn), `WebSite`, per-project schema; availability expressed machine-readably.
- Per-page **meta description + Open Graph + Twitter** tags.
- **`robots.txt`** explicitly allowing AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …) + sitemap reference.
- Auto-generated **sitemap**.
- **`llms.txt`** — plain-markdown summary (who, projects, writing, availability).
- **Entity consistency** — name/role/links identical across page content, footer, and JSON-LD `sameAs`.

## 7. Non-goals (v1)

- No contact form / backend / server-side code.
- No CMS — content is in typed data files + Astro pages.
- No published CV/résumé PDF download.
- No analytics/tracking (can add later).
- App hosting is out of scope — apps are separate, per-app decisions; the site only links to them.

## 8. Success criteria

- Site builds (`npm run build`) and deploys to GitHub Pages on push.
- `curl` of any page returns full HTML content (not a JS shell) — crawler-readable.
- `sitemap`, `robots.txt`, `llms.txt` present and correct.
- JSON-LD validates (Person + projects), availability discoverable.
- Live at `ravic.dev` over HTTPS once DNS is set.
- Adding a new project = appending one entry to `src/data/projects.ts`.

## 9. Open placeholders (fill post-build)

- **Substack URL** (Writing link, llms.txt, JSON-LD `sameAs`) — TODO-marked.
- **GitHub handle/URL** (contact link, footer, JSON-LD `sameAs`) — TODO-marked.
- Real profile photo (optional).
