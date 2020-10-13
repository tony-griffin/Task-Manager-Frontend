FROM node:13.12.0-buster-slim
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV API_PORT_NUM=5000
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
COPY . ./
CMD ["npm", "run", "start"]