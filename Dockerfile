FROM alpine
LABEL maintainer="amcginlay@gmailcom"
RUN apk add --update nodejs nodejs-npm
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 8080
ENTRYPOINT ["node", "./server.js"]
