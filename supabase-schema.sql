create table if not exists public.usernames (
  uid uuid primary key,
  username text not null unique,
  normalized_username text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.user_profiles (
  uid uuid primary key,
  role text check (role in ('student', 'visitor')),
  updated_at timestamptz not null default now()
);

alter table public.usernames enable row level security;
alter table public.user_profiles enable row level security;

create policy "public username lookup"
on public.usernames
for select
using (true);

create policy "authenticated insert own username"
on public.usernames
for insert
to authenticated
with check (auth.uid() = uid);

create policy "authenticated select own profile"
on public.user_profiles
for select
to authenticated
using (auth.uid() = uid);

create policy "authenticated insert own profile"
on public.user_profiles
for insert
to authenticated
with check (auth.uid() = uid);

create policy "authenticated update own profile"
on public.user_profiles
for update
to authenticated
using (auth.uid() = uid)
with check (auth.uid() = uid);
