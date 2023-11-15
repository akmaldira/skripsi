FROM node:18.16.0-alpine3.17
WORKDIR /usr/src/app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 5000
CMD ["yarn", "start"]