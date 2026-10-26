# Nature Pure Extracts — Project Guide & Agent Rules

## 1. Tech Stack & Environment
- **Framework:** React 19 (`react`, `react-dom`)
- **Build Tool & Bundler:** Vite 6 (`vite`, `@vitejs/plugin-react`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, `@import "tailwindcss"`)
- **Icons & Helpers:** `lucide-react`, `clsx`
- **Package Manager:** `npm` (Node.js ES modules)
- **Static Assets Integration:** Custom Vite plugin (`serveWpAssets` in `vite.config.js`) serving media from `wp-content/uploads/`

## 2. Primary Commands
- **Dev Server:** `npm run dev` (starts Vite at `http://localhost:5173`)
- **Production Build:** `npm run build` (`vite build` -> output to `dist/`)
- **Preview Build:** `npm run preview` (`vite preview`)
- **Testing & Linting:** Run `npm run build` to validate bundling and syntax

## 3. Core Directory Map
- `src/`: Core React application root (`main.jsx`, `App.jsx`)
- `src/components/`: Modular component sections (`Navbar`, `Hero`, `ProductCatalog`, `InquiryModal`, `SubBrandsSection`, etc.)
- `src/data/`: Centralized datasets and specifications (`catalog.js`)
- `src/styles/`: Global CSS, Tailwind v4 imports, and theme tokens (`index.css`)
- `public/`: Public web assets (`robots.txt`, `sitemap.xml`)
- `wp-content/uploads/`: Static brand assets, imagery, and product photos
- `dist/`: Generated production build output

## 4. Architectural & Code Conventions
- **Path Aliasing:** Use `@/` to import from `./src` (configured in `vite.config.js`).
- **State Management:** Local React state (`useState`) with top-down props and callbacks.
- **Styling Convention:**
  - Tailwind CSS v4 utility classes.
  - Custom brand CSS variables in `src/styles/index.css` (`--color-emerald-deep`, `--color-amber-gold`, `--color-cream-bg`).
  - Specialized helper classes (`glass-nav`, `glass-card`, `bg-botanical-mesh`).
- **File & Naming Conventions:**
  - `.jsx` for React components in PascalCase (`src/components/Hero.jsx`).
  - `.js` for data, helpers, and configurations (`src/data/catalog.js`).
  - Semantic HTML with accessible attributes and responsive Tailwind breakpoints.

## 5. Agent Constraints & Token Rules
- Target edits with laser focus: modify only the files directly requested.
- Avoid reading files or running broad scans unless strictly required.
- Keep answers concise; do not re-print entire files when showing edits.
- Before editing, confirm file paths and targeted symbols.
