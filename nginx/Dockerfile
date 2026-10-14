FROM node:24-alpine AS frontend-build

WORKDIR /app

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

FROM nginx:alpine as base

FROM base as development
COPY nginx/nginx.dev.conf /etc/nginx/conf.d/default.conf

FROM base as production
COPY --from=frontend-build /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf



