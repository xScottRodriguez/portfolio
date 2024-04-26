# Etapa de construcción
FROM node:18-alpine as build

WORKDIR /app

# Copiar package.json y yarn.lock 
COPY package*.json yarn.lock ./

# Instalar dependencias
RUN yarn install --only=production

# Copiar solo los archivos necesarios (ajusta esto según tus necesidades)
COPY . .

# Construir la aplicación de Next.js
RUN yarn build

# Etapa de producción
# Usar una imagen de Node.js
FROM node:18-alpine 
# Establecer directorio de trabajo
WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

COPY .env .env

CMD ["yarn", "start"]