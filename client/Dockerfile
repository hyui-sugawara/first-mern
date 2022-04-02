FROM node:16.14-alpine3.14

EXPOSE 3000

WORKDIR /app/client

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]