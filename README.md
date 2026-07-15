# Arsha Hsia Portfolio Homepage

A React + Vite + TypeScript + Tailwind CSS portfolio homepage for GitHub Pages.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Plain client-side rendering only

## Project Structure

- `index.html` — Vite entry HTML, SEO metadata, Open Graph metadata, and font loading
- `src/App.tsx` — portfolio content and section structure
- `src/index.css` — Tailwind layers and shared global styles
- `assets/arsha-hsia-portrait.jpg` — optimized portrait image used in the hero
- `assets/logo-*.png` — selected company and venture logos used in project and evidence cards
- `tailwind.config.ts` — Tailwind content paths, font families, and palette tokens

## Links To Confirm Before Publishing

Already set:

- CV: `assets/arsha-hsia-cv-product-operations.pdf`
- Email: `mailto:arsha.hsia@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/arsha-hsia/`
- Lilai Ireland Instagram: `https://www.instagram.com/lilaiireland/`

Still placeholders in `src/App.tsx`:

- SOLUS PDF: `#solus-pdf-placeholder`

## Local Development

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploying With GitHub Pages

1. Create or open the GitHub repository for `arsha-portfolio.github.io`.
2. Push this project to the `main` branch.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow at `.github/workflows/deploy.yml` will install dependencies, run `npm run build`, and publish `dist/`.
6. Visit `https://arsha-portfolio.github.io/` after GitHub finishes deploying.

## Custom Domain

You can buy a domain from providers such as Namecheap, Cloudflare Registrar, Google Domains/Squarespace Domains, or GoDaddy.

For the apex domain `arsha-hsia.com`, add these GitHub Pages DNS records at your domain provider:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

For `www.arsha-hsia.com`, add:

```text
CNAME www   arsha-portfolio.github.io
```

Then in GitHub, go to **Settings → Pages → Custom domain**, enter the domain, save it, and enable **Enforce HTTPS** after DNS finishes propagating.
