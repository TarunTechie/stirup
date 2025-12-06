FROM node:trixie-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm","run","dev" ,"--","--host"]
EXPOSE 5173