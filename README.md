# Discover Himalayas website

Next.js (App Router) · JavaScript · CSS Modules · Framer Motion · deploys on Vercel.
Built from the client's `Discover-Himalayas-Website-Prototype-V4.html`: same pages, same copy, same design tokens.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production check before deploying
```

Needs Node 18.18 or newer.

## Where to change what

| I want to…                              | Edit this                                    |
| --------------------------------------- | -------------------------------------------- |
| Add / edit a journey, dates, prices     | `data/tours.js`                              |
| Change journey order                    | `ORDER` in `data/tours.js`                   |
| Add a journal post                      | `data/posts.js`                              |
| Add a past departure                    | `data/past.js`                               |
| Add photos and videos                   | `public/images/` + paths in `data/images.js` |
| Phone, address, menu, social links      | `data/site.js`                               |
| FAQ questions                           | `data/faq.js`                                |
| Crew / bikes                            | `data/crew.js`, `data/fleet.js`              |
| Colours and fonts                       | `:root` in `app/globals.css`                 |
| Styling of one section                  | the `.module.css` next to that component     |

## Folder structure

```
app/                  one folder per page (page.js + page-specific css)
  journeys/[slug]/    journey detail pages, built from data/tours.js
  journal/[slug]/     journal posts, built from data/posts.js
  api/enquiry/        enquiry form backend (email via Resend)
components/           one folder per component (Component.js + Component.module.css)
data/                 ALL content: tours, posts, images, site settings
public/               logo, favicon, images
```

Rules that keep it easy to change: content lives only in `data/`; each component owns its own CSS file;
no extra folders (hooks, utils, context) until they are really needed.

## Photos and videos

Every picture slot shows a grey placeholder with a caption until you give it a file.
1. Copy the file into `public/images/`
2. In `data/images.js`, replace the matching `null` with `"/images/your-file.jpg"`

`.mp4` paths play as muted looping video (hero slots).

## Enquiry form

Works out of the box by opening the visitor's email app (like the prototype).
To send real emails: create a free Resend account, copy `.env.local.example` to `.env.local`
and fill in `RESEND_API_KEY` (add the same variables in Vercel → Settings → Environment Variables).

## Deploy (Vercel)

1. `git init`, commit, push to a GitHub repository
2. vercel.com → Add New Project → import the repo → Deploy (no settings needed)
3. Add the client's domain in Project → Settings → Domains and update DNS where the domain is managed

## Still placeholders in the client's content

Marked in square brackets on the site and with `PLACEHOLDER` in the code:
journey km / ride days / rest days / prices for 7 of 8 journeys (`data/tours.js`), the third testimonial (`app/page.js`),
past departures (`data/past.js`), custom tour examples (`app/custom-tours/page.js`), crew one-liners (`data/crew.js`),
Vinod's quotes, privacy text (`app/privacy/page.js`), the "own bikes" answer (`data/faq.js`), Rider Passport milestones.
Only 1 of 9 journal posts has full text. The footer newsletter box is not connected to a service yet.
