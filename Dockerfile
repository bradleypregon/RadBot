FROM node:20

WORKDIR /app

COPY ./package.json ./package-lock.json ./
COPY ./ ./ 

RUN apt-get update && apt-get install g++ && apt-get install make && apt-get install -y git
RUN npm install -g node-gyp
#RUN npm install
RUN git clone --single-branch --branch dep-update https://github.com/bradleypregon/discord-music-player.git

npm i discord-music-player

CMD ["npm", "start"]