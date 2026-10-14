# FIELDCRAFTT site

Static marketing site for [fieldcraftt.com](https://fieldcraftt.com).

**GitHub:** [doplrcs2/fieldcraftt](https://github.com/doplrcs2/fieldcraftt)

## Structure

Static files live at the **repo root** (simplest Vercel setup — Root Directory blank / `.`):

```
index.html      Home
contact.html    Inquiry form
styles.css      Shared styles
assets/         Fonts, favicons, marks, logos, portrait
vercel.json     Static hosting config (cleanUrls, no trailing slash)
```

No framework build step — HTML/CSS only.

## Contact form (Web3Forms)

The contact form submits via client AJAX to [Web3Forms](https://web3forms.com) → `jimmy@fieldcraftt.com`.

**Required Vercel env (Production):** `WEB3FORMS_ACCESS_KEY`

1. Create a key at https://web3forms.com for `jimmy@fieldcraftt.com` (confirm the email).
2. In Vercel → project `fieldcraftt` → Settings → Environment Variables, add `WEB3FORMS_ACCESS_KEY` = that UUID (Production).
3. Redeploy (or wait for the next push). The page loads the key from `/api/contact-config` — it is meant to be public client-side.

FormSubmit was removed: its AJAX endpoint is Cloudflare-challenged (`403`) and broke the on-page success UX. Fallback: `mailto:jimmy@fieldcraftt.com`.

## Domains

- **Primary:** `fieldcraftt.com` and `www.fieldcraftt.com` (attach both in Vercel; prefer apex or www as canonical).
- **Redirect:** `fieldcraftt.io` → `fieldcraftt.com` (configure at the DNS/registrar or as a Vercel domain redirect).

## Local preview

From this directory: `npx serve .` or `python3 -m http.server`.
