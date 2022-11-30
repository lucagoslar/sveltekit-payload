# sveltekit-fullstack

Everything you need to build a Svelte project with [Histoire](https://histoire.dev/), [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n), [Prisma](https://prisma.io/) and [trpc](https://trpc.io/).

## Developing

Make sure to create a copy of `.env.example` with the name `.env` and adapt it to your requirements before running the application.

```bash
# install dependencies
npm i

# apply db migrations to db
npx prisma migrate dev

# run the development server
npm run dev
```

## Building

This project has only been tested and deployed with the `@sveltejs/@sveltejs/adapter-node` adapter.

```bash
# build and run the services
docker-compose up --build
```
