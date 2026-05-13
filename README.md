# Runda Finance Website Rebuild

A Next.js App Router rebuild for Runda Finance, focused on credible loan product discovery, clear requirements, responsible lending language, accessible forms, SEO hygiene, and structured lead capture.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Environment

Copy `.env.example` to `.env` and configure production values:

- `DATABASE_URL` for managed Postgres.
- `RESEND_API_KEY`, `LEADS_FROM_EMAIL`, and `LEADS_TO_EMAIL` for notifications.
- `S3_REGION`, `S3_BUCKET`, `S3_ACCESS_KEY_ID`, and `S3_SECRET_ACCESS_KEY` for private document uploads.
- `NEXT_PUBLIC_SITE_URL` for canonical URLs and sitemap output.

Without `DATABASE_URL`, form submissions return success and send email if configured, but lead storage is skipped. Without S3 variables, `/api/uploads/presign` rejects uploads with a storage configuration message.

## Content Rules

The site uses structured content in `src/lib/content.ts`. Unverified facts remain bracketed placeholders and must be reviewed before launch, especially license details, office address, phone numbers, loan ranges, fees, repayment periods, team roles, photos, and compliance wording.

The old WordPress website still needs cleanup, password rotation, plugin/theme updates, spam removal, backups, and Search Console reindexing before traffic or redirects are pushed live.
