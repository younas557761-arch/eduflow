# EduFlow

EduFlow is a multi-tenant school management SaaS built with Next.js 14, React 18 and Supabase.

## MVP
- School registration/login/logout
- Protected dashboard
- Student CRUD
- Teacher CRUD
- Staff CRUD
- Class CRUD
- Supabase PostgreSQL persistence
- Responsive dark SaaS UI

## Local setup
1. Create a Supabase project.
2. Run `database/schema.sql` in Supabase SQL Editor.
3. Copy `.env.example` to `.env.local`.
4. Add your Supabase URL and anon key.
5. `npm install`
6. `npm run dev`

Never commit service-role keys.
