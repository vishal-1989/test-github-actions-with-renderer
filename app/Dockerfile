FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --production

COPY . .

# Default value (will be overridden by CI/CD)
ARG DEPLOYMENT_GUID
ENV DEPLOYMENT_GUID=${DEPLOYMENT_GUID}

EXPOSE 3000

CMD ["npm", "start"]