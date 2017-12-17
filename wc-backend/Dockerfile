FROM node:6

ADD package.json /tmp/package.json
RUN cd /tmp && npm install && npm install -g nodemon
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

EXPOSE 9000

CMD ["nodemon", "server.js"]
