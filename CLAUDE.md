# Portfolio — Francesco Lucia

Persönliche Single-Page-Bewerbungs-/Portfolio-Website. Deutschsprachiges UI, optimiert als digitale Bewerbung (u. a. Europapark — siehe `WHY_ME_TEXT` in [src/constants/constants.jsx](src/constants/constants.jsx)).

## Tech Stack

- **Build**: [Vite 4.4](vite.config.js) (`@vitejs/plugin-react`)
- **Framework**: React 18.2 (function components, hooks, kein TypeScript)
- **Styling**: Tailwind CSS 3.4 + SCSS (hybrid) + PostCSS/Autoprefixer
- **Animation**: framer-motion 11
- **Icons**: react-icons 5
- **Lint**: ESLint 8 (`eslint:recommended`, react, react-hooks, react-refresh)

Scripts: `npm run dev` (Vite Dev-Server), `npm run build`, `npm run preview`, `npm run lint`.

## Architektur

Single-Page-App mit einer flachen Sektions-Komposition in [src/App.jsx](src/App.jsx). Jede Sektion ist ein `<section>` mit einer **deutschen ID** (z. B. `id="Über mich"`, `id="Berufserfahrung"`, `id="Projekte"`), die als Sprungziel für die Sidebar-Navigation dient.

```
src/
├── main.jsx             # React-Root
├── App.jsx              # Sektions-Layout (Single-Page Scroller)
├── app.scss             # Tailwind-Direktiven + globale Styles + .mobile/.desktop
├── components/
│   ├── navbar/          # nur Wrapper um Sidebar
│   ├── sidebar/         # animiertes Off-Canvas-Menü (ToggleButton + Links)
│   ├── hero/            # Landingscreen mit CV-Download & Mailto
│   ├── about/ education/ experience/ projects/ skills/ hobbies/ whyMe/ intro/
│   ├── parallax/        # Parallax / ParallaxEnd / ParallaxOnlyTitle (aktuell auskommentiert in App.jsx)
│   └── RadialProgress/  # Skill-Visualisierung
├── constants/
│   └── constants.jsx    # ALLE deutschen Texte als exportierte JSX-Konstanten
└── public/              # Bilder, CV-PDF, Favicons (per absolutem Pfad referenziert: src="/me.png")
```

### Konventionen, die nicht aus dem Code erraten werden können

- **Inhalt vs. Layout getrennt**: Sämtlicher Fließtext lebt als JSX-Konstante in [src/constants/constants.jsx](src/constants/constants.jsx) (`ABOUT_TEXT`, `EDUCATION_BSC_TEXT`, `EXPERIENCE_HRN_TEXT`, …). Texte dort ändern, nicht in Komponenten hardcoden.
- **Responsive über Klassen-Switch**: Globale Klassen `.mobile` und `.desktop` in [src/app.scss](src/app.scss) togglen Sichtbarkeit unter/über 768 px. Wird in den Text-Konstanten verwendet, um z. B. kürzere Mobil-Varianten desselben Absatzes zu liefern. Tailwind-Breakpoints (`md:`, `lg:`) sind zusätzlich im Einsatz — beide Mechanismen koexistieren.
- **Navigation per Anker auf deutsche IDs**: Die Sidebar-Links springen auf `#Über mich`, `#Berufserfahrung`, `#Projekte`, `#Skills`, `#Hobbys`, `#Warum mich`, `#Startseite`. Werden IDs umbenannt, müssen die Sidebar-Links in [src/components/sidebar/links/](src/components/sidebar/links/) mitgepflegt werden.
- **Smooth Scroll**: Aktiviert über `scroll-behavior: smooth` + `scroll-snap-type: y mandatory` in [src/app.scss](src/app.scss).
- **Public-Assets per Root-Pfad**: Bilder, PDF & Icons aus `public/` werden absolut referenziert (`src="/me.png"`, `window.open("/CV_FrancescoLucia.pdf")`) — kein Import.
- **Auskommentierte Parallax-Sektionen**: In [src/App.jsx](src/App.jsx) sind zahlreiche `<Parallax>`-Blöcke bewusst auskommentiert. Vor dem Aufräumen mit dem Eigentümer abklären — sie wirken wie ein A/B-Toggle der Layout-Variante.
- **Theme-Farben**: Dunkler Hintergrund-Gradient `from-[#0c0c1d] to-[#111132]`, Akzentfarbe `text-sky-500`. Custom-Farbe `customGray: #b0a8a2` in [tailwind.config.js](tailwind.config.js).
- **Font**: Nunito Sans wird in `app.scss` als Default gesetzt, im HTML wird zusätzlich DM Sans geladen ([index.html](index.html)) — Diskrepanz besteht, beim Anfassen prüfen, was wirklich verwendet werden soll.

### Sektions-Reihenfolge (Quelle der Wahrheit: [src/App.jsx](src/App.jsx))

`Startseite (Hero) → Über mich → Ausbildung → Berufserfahrung → Projekte → Skills → Hobbys → Warum mich`

## Beim Arbeiten beachten

- **Texte sind Deutsch** — Inhalt, neue Sektionen, Buttons konsequent deutsch halten (User-Sprache, Bewerbungskontext).
- **Keine TypeScript-Migration** ohne Rückfrage — Setup ist bewusst JSX-only, `react/prop-types` ist in [`.eslintrc.cjs`](.eslintrc.cjs) abgeschaltet.
- **Vor dem Pushen**: `npm run lint` (max-warnings = 0) und `npm run build` lokal grün halten.
- **Bilder in `public/` sind groß** (mehrere MB, z. B. `me.png` ~9 MB). Bei neuen Assets bewusst optimieren (WebP/AVIF), bevor sie committed werden.
- **Mobile Variante mittesten**: Wegen `.mobile`/`.desktop`-Switch und sektionsweisen `lg:h-screen`-Regeln bricht Mobile sonst leicht.
