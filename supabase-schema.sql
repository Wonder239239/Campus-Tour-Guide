create table if not exists public.usernames (
  uid uuid primary key,
  username text not null unique,
  normalized_username text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.user_profiles (
  uid uuid primary key,
  role text check (role in ('student', 'visitor')),
  stamps text[] not null default '{}',
  updated_at timestamptz not null default now()
);

create table if not exists public.messages (
  id bigint generated always as identity primary key,
  uid uuid not null,
  username text not null,
  content text not null check (char_length(content) between 1 and 160),
  created_at timestamptz not null default now()
);

alter table public.user_profiles
add column if not exists stamps text[] not null default '{}';

alter table public.usernames enable row level security;
alter table public.user_profiles enable row level security;
alter table public.messages enable row level security;

drop policy if exists "public username lookup" on public.usernames;
drop policy if exists "authenticated insert own username" on public.usernames;
drop policy if exists "authenticated select own profile" on public.user_profiles;
drop policy if exists "authenticated insert own profile" on public.user_profiles;
drop policy if exists "authenticated update own profile" on public.user_profiles;
drop policy if exists "public leaderboard read profiles" on public.user_profiles;
drop policy if exists "public read messages" on public.messages;
drop policy if exists "authenticated insert messages" on public.messages;

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

create policy "public leaderboard read profiles"
on public.user_profiles
for select
using (true);

create policy "public read messages"
on public.messages
for select
using (true);

create policy "authenticated insert messages"
on public.messages
for insert
to authenticated
with check (auth.uid() = uid);
