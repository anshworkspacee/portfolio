# ANSH — THE BUILDER

A cinematic, streaming-inspired personal portfolio for **Ansh Shrivastav**: Student, Web Developer, and Founder of **WEBYONEEC**.

The website presents developer milestones as seasons, projects as Originals, and delivers a modern, high-performance web experience built with React 18, TypeScript, Tailwind CSS 4, Vite 6, and Framer Motion 11.

---

## 🌟 Featured Real Projects

1. **BEMATLAB** — [Live Demo](https://bematlab.netlify.app/)
   - *Quick-commerce grocery web app concept with high-speed browsing and fluid shopping flows.*
   - *Stack: React, TypeScript, Tailwind CSS, Vite.*

2. **SSA Hotel & Residences** — [Live Demo](https://ssa-hotels.netlify.app/)
   - *Hospitality web experience showcasing accommodations, amenities, and booking inquiries.*
   - *Stack: HTML5, CSS3, JavaScript, Responsive Design.*

3. **Ansh Demo** — [Live Demo](https://ansh-demo.netlify.app/)
   - *Live interactive lab for exploring layout patterns, component behaviors, and web styling.*
   - *Stack: HTML5, CSS3, JavaScript, Netlify.*

4. **WEBYONEEC** — [Live Website](https://webyoneec.web.app/)
   - *Official digital agency platform founded by Ansh Shrivastav to build custom web solutions for businesses.*
   - *Stack: HTML5, CSS3, JavaScript, Firebase Hosting, SEO.*

---

## 🚀 Quick Start (Windows)

Requires **Node.js 18+**.

### 1. Install Dependencies
```powershell
npm install
```

### 2. Run Local Development Server
```powershell
npm run dev
```
Open the local URL Vite prints (typically `http://localhost:5173/`).

### 3. Production Build & Preview
```powershell
npm run build
npm run preview
```
The optimized production build is output to `dist/` and is ready for immediate deployment.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18 & TypeScript
- **Bundler & Dev Server**: Vite 6
- **Styling**: Tailwind CSS 4 & CSS Custom Properties
- **Motion & Interactions**: Framer Motion 11
- **Smooth Scroll**: Lenis
- **Deployment Targets**: Netlify, Vercel, Firebase Hosting, GitHub Pages

### Project Structure
```text
ansh-portfolio-series/
├── public/
│   ├── assets/
│   │   ├── ansh-portrait.svg    # High-definition cinematic monogram portrait
│   │   └── og-image.svg         # Open Graph social sharing image
│   └── favicon.svg              # Custom monogram favicon
├── src/
│   ├── components/
│   │   ├── About.tsx            # The Pilot: background, venture & core stack
│   │   ├── ContinueWatching.tsx # Interactive progress tracking rail
│   │   ├── EpisodeCard.tsx      # Journey milestone episode cards
│   │   ├── FinalCTA.tsx         # The Next Episode: direct verified contact channels
│   │   ├── Hero.tsx             # Billboard hero with parallax, typography & chips
│   │   ├── Navbar.tsx           # Responsive hide-on-scroll header with profile menu
│   │   ├── OpeningSequence.tsx  # Cinematic studio card & titles intro
│   │   ├── Originals.tsx        # Pinned horizontal sequence / touch swipe rail
│   │   ├── PlayIntro.tsx        # Highlight reel with keyboard controls
│   │   ├── Poster.tsx           # Generative card art, motifs & series mark
│   │   ├── ProfileSelector.tsx  # Interactive "Who's watching?" section reorderer
│   │   ├── ProjectCard.tsx      # Project cards with Live Demo links
│   │   ├── ProjectModal.tsx     # Full modal view with project details & live links
│   │   ├── Rail.tsx             # Smooth horizontal rail controls
│   │   ├── ResumeModal.tsx      # Full-screen developer story modal with email request
│   │   ├── ResumeViewer.tsx     # Clean overview sheet with verified background
│   │   ├── Scene.tsx            # Scene wrapper with viewport tracking
│   │   ├── Seasons.tsx          # My Journey: seasons & episodes
│   │   ├── Skills.tsx           # Interactive skill categories & cross-references
│   │   ├── TopPicks.tsx         # Featured top releases row
│   │   └── fx.tsx               # Magnetic buttons, 3D tilt, text reveals & particles
│   ├── data/
│   │   └── portfolio.ts         # Single source of truth for all content & links
│   ├── hooks/                   # Lenis scroll, viewport observers & media queries
│   ├── App.tsx                  # Main layout & stage manager
│   ├── index.css                # Global design system & film grain
│   └── main.tsx                 # React entrypoint
├── index.html                   # HTML template with complete SEO & OG tags
├── package.json
└── vite.config.ts
```

---

## 🌐 Deploying to Production

### Netlify
1. Connect repository or run `netlify deploy --prod --dir=dist`.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Firebase Hosting
```powershell
firebase init hosting
# Set public directory to 'dist'
npm run build
firebase deploy --only hosting
```

### Vercel
```powershell
vercel --prod
```

---

## 📌 Integrity & Honest Verification
This portfolio features only real, verified projects, technologies, and achievements. No documents or certificates are fabricated. For direct inquiries, resume requests, or client projects, contact:
- **Email**: team.webyoneec@gmail.com / yrrasnsh29@gmail.com
- **Agency Platform**: [webyoneec.web.app](https://webyoneec.web.app/)
- **GitHub**: [github.com/anshworkspacee](https://github.com/anshworkspacee)
