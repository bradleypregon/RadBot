FROM node:20

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN apt-get update
RUN apt-get install g++
RUN apt-get install make
RUN npm install -g node-gyp
RUN npm install

COPY . . 

CMD ["npm", "start"]