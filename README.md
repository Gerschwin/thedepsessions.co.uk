# The Dep Sessions — Next.js scaffold

This branch (feature/nextjs) contains a minimal Next.js + Supabase scaffold so you can build multi-user features while keeping main as the live static site.

Local development

1. Install dependencies

   npm install

2. Create a .env.local file with the following values (replace with your Supabase project values):

   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

3. Run the dev server

   npm run dev

What I added

- package.json, next.config.js
- public/index.html (your existing static page copied here)
- pages/ (index, auth, dashboard), pages/_app.js
- lib/supabaseClient.js (init from env)
- styles/globals.css

Next recommended steps

- Create a Supabase project and enable Email sign-in. Create the "profiles" table described in earlier guidance.
- Add RLS policies to allow users to read/write their own profile rows only.
- Configure Vercel or Netlify to use feature branch preview deployments. Set the two NEXT_PUBLIC_ env vars in the host.
- When ready, open a PR from feature/nextjs -> main and review the production preview before merging.

Security

- Never commit service_role keys or other secrets. Keep them in host env vars or GitHub Secrets.
