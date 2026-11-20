# Etapa de construcción
FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.6.5 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
# next/font descarga las fuentes de Google; el IPv6 de Docker en WSL falla
ENV NODE_OPTIONS=--dns-result-order=ipv4first
RUN pnpm build

# Etapa de producción: solo el servidor standalone, sin node_modules completos
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0

COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
# next-i18next lee su config en tiempo de ejecución
COPY --from=build /app/next-i18next.config.js ./

USER node
EXPOSE 3000
CMD ["node", "server.js"]
