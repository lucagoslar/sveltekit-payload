FROM node:18


WORKDIR /app

COPY /.npmrc /app/
COPY /package*.json /app/
RUN npm ci

COPY /.env /app/.env

COPY /static /app/static
COPY postcss.config.cjs /app/
COPY sass-alias.js /app/
COPY svelte.config.js /app/
COPY vite.config.ts /app/

COPY /prisma /app/prisma
RUN npx -y prisma generate

COPY /src /app/src

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=src/lib/server/payload/payload.config.ts

RUN npx payload build

RUN npm run build

CMD [ "node", "/app/src/server.js" ]