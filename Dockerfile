FROM alpine
LABEL maintainer="amcginlay@gmail.com"
RUN apk add --update nodejs nodejs-npm
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]
