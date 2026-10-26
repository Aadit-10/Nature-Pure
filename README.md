# Nature Pure Extracts — Modern Web Application

A modern, high-performance web application for **Nature Pure Supercritical Extracts**, engineered with **React 19**, **Vite 6**, and **Tailwind CSS v4**.

![Nature Pure Banner](wp-content/uploads/2026/05/WhatsApp-Image-2026-04-13-at-12.05.57-PM.jpeg)

---

## 🌿 Overview

Nature Pure Supercritical Extracts Pvt. Ltd. is a global pioneer in solvent-free botanical extraction, standardizing high-performance active phytocompounds for food, nutrition, cosmetics, and pharmaceuticals.

This repository hosts the redesigned, fully responsive, and interactive digital presence with:
- **Interactive Product Catalog**: Comprehensive filtering across 70+ botanical extracts and 8 distinct product lines (Nature Harvest, LypoPure, Nature's Purest, Nature Pure Extracts, Nature's Alchemy, Colors, Flavors, and Fragrance).
- **Direct Lead Generation**: Quotation inquiry modal and real-time WhatsApp contact integration.
- **Modern Responsive Design**: Fluid mobile/tablet drawer navigation, botanical mesh glassmorphism, and responsive Tailwind breakpoints.
- **Enterprise SEO**: Structured Schema.org JSON-LD data, Open Graph and Twitter Card tags, and automated XML sitemap generation.

---

## 🛠 Tech Stack

- **Framework:** React 19
- **Build Tool & Bundler:** Vite 6
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React (`lucide-react`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Static Media:** High-resolution botanical assets under `wp-content/uploads/`

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (v9 or higher)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/aaditk777/nature-pure.git
cd nature-pure
npm install
```

### Development Server

Start Vite's development server with hot module replacement (HMR):

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Bundle and optimize the application for production deployment:

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory.

### Preview Production Build

Preview the production bundle locally:

```bash
npm run preview
```

---

## 📁 Project Architecture

```
nature-pure/
├── public/                 # Static public assets (robots.txt, sitemap.xml)
├── src/
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx              # Navigation header with mobile drawer
│   │   ├── Hero.jsx                # Cinematic hero section
│   │   ├── ProductCatalog.jsx      # Interactive catalog with brand filter
│   │   ├── InquiryModal.jsx        # Direct RFQ / quote modal
│   │   ├── SubBrandsSection.jsx    # Sub-brand showcase cards
│   │   ├── StorySection.jsx        # Company history & heritage
│   │   ├── InfrastructureSection.jsx # Manufacturing facilities
│   │   ├── QualitySection.jsx      # Testing & analytical specs
│   │   ├── CertificationsSection.jsx # ISO, GMP, Halal, Kosher
│   │   ├── ContactSection.jsx      # Contact info, map & RFQ form
│   │   └── Footer.jsx              # Site footer & regulatory links
│   ├── data/
│   │   └── catalog.js              # Central product dataset & specifications
│   ├── styles/
│   │   └── index.css               # Tailwind CSS v4 & theme tokens
│   ├── App.jsx                     # Root application container & modals
│   └── main.jsx                    # React 19 entry point
├── wp-content/uploads/     # Brand imagery, certificates & product photography
├── index.html              # HTML5 entry with metadata & font preconnects
├── vite.config.js          # Vite configuration & asset middleware
├── package.json            # Scripts & dependencies
└── .gitignore              # Production-grade Git ignore rules
```

---

## 🚢 Deployment

The production build in `dist/` is ready for deployment across modern hosting platforms:
- **Vercel / Netlify / Cloudflare Pages**: Connect your GitHub repository with build command `npm run build` and publish directory `dist`.
- **GitHub Pages / AWS S3**: Deploy the generated `dist/` bundle directly.

---

## 📄 License

Proprietary — All rights reserved © Nature Pure Supercritical Extracts Pvt. Ltd.
