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

## FormSubmit

The contact form posts to [FormSubmit](https://formsubmit.co) (`jimmy@fieldcraftt.com`). No FormSubmit account is required. The first real submission sends a one-time activation email to that address; confirm it before inquiries will be delivered. Fallback: `mailto:jimmy@fieldcraftt.com`.

## Domains

- **Primary:** `fieldcraftt.com` and `www.fieldcraftt.com` (attach both in Vercel; prefer apex or www as canonical).
- **Redirect:** `fieldcraftt.io` → `fieldcraftt.com` (configure at the DNS/registrar or as a Vercel domain redirect).

## Local preview

From this directory: `npx serve .` or `python3 -m http.server`.
