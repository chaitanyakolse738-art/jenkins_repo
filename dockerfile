FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install --silent

COPY app ./

EXPOSE 3000

CMD ["node", "server.js"]
