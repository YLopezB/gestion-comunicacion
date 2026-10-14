FROM node:24-alpine

WORKDIR /app

FROM base AS development
COPY package*.json ./
RUN npm install
COPY src ./src
CMD ["npm", "run", "dev"]

FROM base AS production
COPY package*.json ./
RUN npm install --omit=dev
COPY src ./src
CMD ["npm", "start"]

