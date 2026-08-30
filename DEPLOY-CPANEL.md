# Deploying Regal Threads on cPanel (Apache shared hosting)

The app is built as a fully static single-page site — no Node.js process is
needed on the server.

## 1. Build locally

```bash
npm install
npx vite build
```

This produces a flat `dist/` folder:

```
dist/
  .htaccess        <- Apache rewrite rules (SPA fallback, HTTPS, caching)
  index.html
  assets/          <- hashed JS + CSS
  images/
  favicon.ico
  robots.txt
```

## 2. Upload

Upload the **contents of `dist/`** into `public_html/` (or the document root of
your addon/subdomain). Make sure the hidden `.htaccess` file goes up too — in
cPanel File Manager enable *Settings → Show Hidden Files (dotfiles)*.

## 3. Requirements on the host

- Apache with `mod_rewrite` enabled (standard on cPanel).
- SSL certificate (AutoSSL) — `.htaccess` redirects HTTP → HTTPS. Comment out
  the three HTTPS lines if you have not issued a certificate yet.

## Notes

- **No redirect issues:** `.htaccess` rewrites every unknown path to
  `index.html`, so `/shop`, `/product/<slug>`, `/admin`, refreshes and shared
  deep links all work.
- **Backend:** the database/auth stays hosted in the cloud; the browser talks to
  it directly using the `VITE_SUPABASE_*` values in `.env`, which are baked into
  the build. Keep `.env` next to `package.json` when you build.
- **Subfolder hosting:** if you deploy into `public_html/shop/` instead of the
  root, build with `npx vite build --base=/shop/` and change `RewriteBase /` to
  `RewriteBase /shop/` plus `RewriteRule . /shop/index.html [L]`.
- **Google sign-in:** add your cPanel domain to the allowed redirect URLs in the
  backend auth settings.
