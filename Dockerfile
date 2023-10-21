FROM node:18
WORKDIR /app/react-app

COPY package*.json . 

RUN npm install
RUN npm install typescript

# Instale o nodemon globalmente
RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "run", "preview"]