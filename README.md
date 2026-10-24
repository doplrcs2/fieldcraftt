# Dialed Partners site

Static marketing site for [dialedpartners.com](https://dialedpartners.com).

**GitHub:** [doplrcs2/fieldcraftt](https://github.com/doplrcs2/fieldcraftt) (repo/env name still `fieldcraftt` until renamed)

## Structure

Static files live at the **repo root** (simplest Vercel setup - Root Directory blank / `.`):

```
index.html      Home
contact.html    Inquiry form
styles.css      Shared styles
assets/         Fonts, favicons, marks, logos, portrait
api/            contact-config (Web3Forms key)
vercel.json     Static hosting config (cleanUrls, no trailing slash)
```

No framework build step - HTML/CSS only.

## Contact form (Web3Forms)

The contact form submits via client AJAX to [Web3Forms](https://web3forms.com) → `jimmy@dialedpartners.com`.

**Required Vercel env (Production):** `WEB3FORMS_ACCESS_KEY`

1. Create (or update) a key at https://web3forms.com for `jimmy@dialedpartners.com` (confirm the email).
2. In Vercel → project `fieldcraftt` → Settings → Environment Variables, add `WEB3FORMS_ACCESS_KEY` = that UUID (Production).
3. Redeploy (or wait for the next push). The page loads the key from `/api/contact-config` - it is meant to be public client-side.

FormSubmit was removed: its AJAX endpoint is Cloudflare-challenged (`403`) and broke the on-page success UX. Fallback: `mailto:jimmy@dialedpartners.com`.

**Note:** Site copy now points at `@dialedpartners.com`. MX / Google Workspace / inbox routing for that domain is outside this repo - confirm delivery separately.

## Domains

- **Primary:** `dialedpartners.com` and `www.dialedpartners.com` (attach both in Vercel; prefer apex or www as canonical - site metas use apex).
- **Legacy:** Detach or redirect `fieldcraftt.com` / `www.fieldcraftt.com` / `fieldcraftt.io` to `dialedpartners.com` at DNS or Vercel once ready.

## Local preview

From this directory: `npx serve .` or `python3 -m http.server`.
