FROM node:18-alpine AS build
WORKDIR /usr/src/app/
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/app/
COPY package.json .
RUN npm install --omit=dev
COPY --from=build /usr/src/app/dist /usr/src/app/dist

EXPOSE 5000

ENTRYPOINT ["npm", "run", "start"]
