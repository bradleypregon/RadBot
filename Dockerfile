FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN apk add g++ make py3-pip
RUN npm install -g node-gyp
RUN npm install

COPY . . 

CMD ["npm", "start"]