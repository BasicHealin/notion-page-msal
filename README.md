This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## config msal

Configure authentication and authorization parameters:

1.  Open services/msal.js
2.  Replace the string "clientId" with your client ID.
3.  Replace the string "authority" with "https://login.microsoftonline.com/HereEnter_the_Tenant_Info_Here".
4.  Replace the string "redirectUri" with the redirect uri you setup on AAD Portal.

## API notion

1. Open lib/config.js
2. Replace the string "rootNotionPageId" with your notion's page ID.
