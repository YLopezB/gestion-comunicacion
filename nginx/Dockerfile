FROM node:24-alpine AS frontend-build

WORKDIR /app

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

FROM nginx:alpine AS base

WORKDIR /app

FROM base AS development
COPY nginx.dev.conf /etc/nginx/nginx.conf

FROM base AS production
COPY --from=frontend-build /app/dist /usr/share/nginx/html
COPY nginx.prod.conf /etc/nginx/nginx.conf



