FROM node:20-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm install --silent

COPY app ./

EXPOSE 5000

CMD ["node", "server.js"]
