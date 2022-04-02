FROM node:16.14-alpine3.14

EXPOSE 3001

WORKDIR /app/server

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]