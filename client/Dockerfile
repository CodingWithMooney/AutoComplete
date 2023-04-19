FROM nginx:alpine

WORKDIR /etc/nginx
COPY ./nginx.conf ./conf.d/default.conf
EXPOSE 80
ENTRYPOINT [ "nginx" ]
CMD [ "-g", "daemon off;" ]

FROM node:19-alpine as client-development

WORKDIR /client

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm","run","dev"]




