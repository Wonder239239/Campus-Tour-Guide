create table if not exists public.usernames (
  uid uuid primary key,
  username text not null unique,
  normalized_username text not null unique,
  created_at timestamptz not null default now()
);

alter table public.usernames enable row level security;

create policy "public username lookup"
on public.usernames
for select
using (true);

create policy "authenticated insert own username"
on public.usernames
for insert
to authenticated
with check (auth.uid() = uid);
