FROM node:14-alpine

COPY . /workspace
WORKDIR /workspace
RUN npm install
# RUN npm install nodemon -g


EXPOSE 3000

# CMD nodemon app.js
CMD node app.js