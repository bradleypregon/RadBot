FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN apk add g++ make py3-pip
RUN npm install -g node-gyp
RUN npm install

COPY . . 

CMD ["npm", "run", "start"]