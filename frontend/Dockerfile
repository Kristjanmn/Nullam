FROM node:21.7.2 as build
WORKDIR /workspace/app/frontend
COPY public public
COPY src src
COPY package.json  .
COPY package-lock.json .
COPY tsconfig.json .

RUN npm install

ENTRYPOINT ["npm","start"]