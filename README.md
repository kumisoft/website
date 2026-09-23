# Kumisoft Website

Marketing site for Kumisoft, built with Next.js 15 (App Router), Tailwind CSS v4 and shadcn/ui.

## Development

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app` – routes, layout and global styles (theme tokens live in `globals.css`)
- `src/components/ui` – shadcn/ui components (add more with `npx shadcn@latest add <name>`)
- `src/hooks` – shared React hooks
- `public` – static assets

## Deployment

Deployed with AWS Amplify Hosting. Build settings are in `amplify.yml`; Amplify builds the connected branch on every push.
