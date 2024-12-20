FROM node:22-alpine as build
WORKDIR /app/src
RUN npm install -g pnpm
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . ./
RUN pnpm nx run jbx-account:build:production

FROM node:22-alpine
WORKDIR /usr/app
COPY --from=build ./app/src/dist/apps/jbx-account/ ./
CMD node server/server.mjs
EXPOSE 4000