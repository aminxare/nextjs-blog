FROM node

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["npm","run dev"]