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

This project can only be deployed if built with `@sveltejs/@sveltejs/adapter-node`. In production, it is highly recommended to run the docker image and change the `ENVIRONEMTN` env variable to something other than `DEVELOPMENT`.

```bash
# build and run the image
docker-compose up --build
```
