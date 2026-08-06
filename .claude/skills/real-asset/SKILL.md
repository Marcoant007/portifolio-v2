---
name: real-asset
description: Add a real logo, badge, certificate, or project screenshot to the portfolio — download it locally, verify it, and wire it into the matching src/data/*.ts file. Use whenever the user wants to add/update a badge, certification, company/institution logo, or project cover image in new-portifolio-v2.
---

# Adding a real asset (logo / badge / screenshot)

This project's hard rule (see [CLAUDE.md](../../../CLAUDE.md)): **no hotlinked
third-party image URLs in code, no invented content.** Every visual asset is a real
file downloaded once and committed locally, imported statically so Vite bundles it.

Do not add a bare remote URL as an image `src` in any `src/data/*.ts` file. The one
accepted exception is `github.githubassets.com` (first-party, no expiring token) used
in `src/data/githubAchievements.ts` — do not extend that exception to other domains.

## Workflow

### 1. Get the real source URL

Ask the user for it, or find it yourself (official badge/certificate page, LinkedIn
company logo, Credly credential, etc.). Never fabricate a logo or reuse an unrelated
stock image as if it were the real one.

### 2. Download and verify before trusting it

```bash
curl -sL -o "<tmp-or-final-path>" "<source-url>" -w "HTTP:%{http_code} SIZE:%{size_download}\n"
```

Check the output: `HTTP:200` and a `SIZE` in the tens-of-KB range (a real image), not a
few hundred bytes (that's an error page or redirect stub). If it fails, do not guess an
alternate URL blindly — re-check the source or ask the user.

Watch out for LinkedIn media URLs (`media.licdn.com/...?...&e=<unix-timestamp>&...`) —
the `e=` param is an expiry a few months out. They work today but rot on their own —
that's exactly why the file gets downloaded once and kept locally instead of hotlinked.

### 3. Save to the right folder

| Content                          | Folder                                  |
|-----------------------------------|------------------------------------------|
| Earned badge (Credly, etc.)       | `src/assets/images/badges/`             |
| Company/institution logo          | `src/assets/images/logos/`              |
| Project screenshot                | `src/assets/images/projects/`           |
| Certificate scan/screenshot       | `src/assets/images/certificates/`       |
| Profile photo                     | `src/assets/images/profile/`            |

Prefer `.webp`. Use a short kebab-case filename describing the thing, not the source
(`aws-eks.webp`, not `download123.webp`).

### 4. Wire it into data

Static-import the file at the top of the matching `src/data/*.ts` and reference the
imported variable in the entry object — never a string URL:

```ts
import awsEksBadge from "../assets/images/badges/aws-eks.webp";
// ...
{ title: "...", image: awsEksBadge, ... }
```

Match the existing shape in that file (`EarnedBadge`, `Course`, `Experience`, `Project`,
etc. in `src/types/index.ts`) — don't add ad hoc fields.

### 5. Confirm it renders

Run `pnpm dev` and check the relevant section (Badges, Education, Projects, Experience)
actually shows the new image — broken imports/paths fail silently as a broken `<img>`,
not a build error. Use the `visual-qa` skill if the change also touches layout.

## Checklist

- [ ] Source URL confirmed real (not guessed, not a stock/thematic placeholder)
- [ ] Downloaded locally, `HTTP:200` + plausible size verified
- [ ] Saved under the correct `src/assets/images/<category>/` folder, `.webp` preferred
- [ ] Statically imported in `src/data/*.ts` — no bare remote URL committed
- [ ] Rendered and checked in the running dev server
