# Nada Elhawary — Developer Portfolio

A personal portfolio website for Nada Elhawary, Junior Front-End Developer. Built with React and Vite, it presents skills, projects, education, and contact information in a bilingual (English / Arabic), theme-aware single-page application.

---

## Overview

This is a static single-page application (SPA) that serves as a professional portfolio. It has no backend of its own — all content is defined in the source code, and the contact form is handled by an external service (FormSubmit). The site is designed to be deployed as a static build output.

**Intended audience:** Potential employers, clients, and collaborators who want to learn about the developer's background, projects, and skills.

---

## Features

### Content Sections
- **Hero** — Typewriter role animation, profile photo, floating tech-stack badges, CV download, and a link to projects
- **About** — Stats with animated count-up on scroll, and a tech-stack highlights list
- **My Journey** — Alternating/curved timeline of key milestones (desktop) with a single-column layout (mobile)
- **Skills** — Categorised skill cards across Frontend, Backend, Database, and Tools
- **Projects** — Featured projects with images, descriptions, tech tags, and links to live demos and source code
- **Education & Training** — Timeline of academic and professional training entries
- **Contact** — Contact info with social links and a working contact form

### UI & UX
- Animated loading screen with a progress bar
- Glassmorphism card design throughout
- Dynamic cursor glow that follows the mouse (desktop)
- Scroll-reveal animations on every section
- Sticky navbar with scroll-aware styling and a fullscreen mobile overlay menu
- Dark / Light theme toggle (persisted in `localStorage`, respects system preference on first visit)
- English / Arabic language toggle with full RTL layout support (persisted in `localStorage`)
- Dynamically updated `<title>`, meta tags, Open Graph tags, and JSON-LD structured data on language switch
- Fully responsive layout across mobile (320px+), tablet, and desktop

### SEO & Accessibility
- `sitemap.xml` and `robots.txt` included in `public/`
- Open Graph and Twitter Card meta tags
- Schema.org `Person` structured data injected dynamically
- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`, `<article>`)
- `aria-label` attributes on interactive controls

---

## Tech Stack

| Area | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Animation | Framer Motion 12 |
| Icons | Lucide React, React Icons |
| Styling | Plain CSS with custom properties (no CSS framework) |
| State / Context | React Context API (`AppContext`) |
| i18n | Custom translation system (`translations.js` + context hook) |
| Contact Form | [FormSubmit](https://formsubmit.co/) (third-party, no backend required) |
| Fonts | Google Fonts — Inter, Outfit, Cairo |
| Linting | ESLint with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` |
| Deployment | Static build — compatible with Vercel, Netlify, GitHub Pages, or any static host |

---

## Project Structure

```
portfolio/
├── public/
│   ├── logo.png                  # Site logo used in navbar, footer, and loading screen
│   ├── favicon.png
│   ├── me.JPG                    # Profile photo
│   ├── EduGenie.png              # Project screenshots
│   ├── NexusBooks.png
│   ├── AdaStore.png
│   ├── Nada_Elhawary_CV (2).pdf  # CV file served for download
│   ├── sitemap.xml
│   └── robots.txt
│
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Root component — section order, cursor glow, loading gate
│   ├── index.css                 # Global CSS variables, resets, shared utility classes
│   │
│   ├── context/
│   │   └── AppContext.jsx        # Theme, language, translation helper, RTL flag
│   │
│   ├── utils/
│   │   └── translations.js       # All English and Arabic strings for every section
│   │
│   └── components/
│       ├── LoadingScreen.jsx     # Animated progress bar shown before the app renders
│       ├── Navbar.jsx            # Fixed header with theme/language toggles and mobile menu
│       ├── Hero.jsx              # Landing section with typewriter effect
│       ├── About.jsx             # Stats with count-up animation and tech highlights
│       ├── Journey.jsx           # Personal milestone timeline
│       ├── Skills.jsx            # Categorised skill tags
│       ├── Projects.jsx          # Project cards with hover overlay and mobile action buttons
│       ├── Experience.jsx        # Education & Training timeline + Services grid
│       ├── Testimonials.jsx      # (Currently commented out in App.jsx)
│       ├── Contact.jsx           # Contact info and FormSubmit-powered form
│       ├── Footer.jsx            # Logo, copyright, and quick links
│       └── ErrorBoundary.jsx     # React error boundary wrapper
│
├── index.html                    # HTML shell with meta tags, OG tags, and theme-color
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** — v18 or later recommended
- **npm** — v9 or later (included with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Nada-Elhawary/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server will start at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

The output is placed in the `dist/` directory. Serve it with any static file host.

```bash
# Preview the production build locally
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

This project has **no environment variables**. There is no `.env` file and no secret keys are used client-side.

The contact form posts directly to `https://formsubmit.co/ajax/` using a public email address. No API keys are required.

---

## Customisation

All site content — text, project data, stats, skill lists, education entries, and translations — lives in one file:

```
src/utils/translations.js
```

Project images and the CV PDF are served from `public/`.

Project metadata (images, live URLs, GitHub URLs) is defined at the top of `src/components/Projects.jsx` in the `projectMeta` array.

---

## Deployment

Since the output is a standard static build, you can deploy to any static host:

- **Vercel** — connect the repository and Vercel will detect Vite automatically
- **Netlify** — set build command to `npm run build` and publish directory to `dist`
- **GitHub Pages** — use the `gh-pages` package or a GitHub Actions workflow to publish `dist/`

No server-side configuration is required.

---

## License

This project is personal work. You are welcome to use it as inspiration or a reference, but please do not deploy it as-is with the original content, name, or photos.
