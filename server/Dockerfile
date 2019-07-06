FROM node:10.16.0-jessie

WORKDIR /app
COPY package*.json /app/
RUN npm install --production
COPY . /app

# VOLUME [ "/server" ]

EXPOSE 8000

CMD ["node", "index.js"]