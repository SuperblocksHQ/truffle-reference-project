FROM node:10

COPY . /project

WORKDIR /project

CMD ["sh", "-c", "npx truffle migrate --network ${NETWORK}"]
