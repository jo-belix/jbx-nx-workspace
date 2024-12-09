FROM node:22-alpine as build
WORKDIR /app/src
RUN npm install -g pnpm
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . ./
RUN pnpm nx run jbx-account-api:build:production

FROM node:22-alpine
WORKDIR /usr/app
RUN npm install -g pnpm
COPY --from=build ./app/src/dist/apis/jbx-account-api/ ./
RUN pnpm install --frozen-lockfile
CMD node main.js
EXPOSE 3333