FROM node:16-alpine
WORKDIR /usr/src/app/
COPY . .
RUN npm install && npm run build && npm prune
