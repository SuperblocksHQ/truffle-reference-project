FROM node:10

COPY . /project

WORKDIR /project

CMD ["sh", "-c", "/project/node_modules/.bin/truffle migrate --network ${NETWORK}"]
