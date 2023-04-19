FROM node:19-alpine as server-development

WORKDIR /server

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:19-alpine as server-production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /server/

COPY package*.json .

RUN npm install --only=production

COPY --from=development /server/build ./build

CMD ["node", "build/index.js"]

