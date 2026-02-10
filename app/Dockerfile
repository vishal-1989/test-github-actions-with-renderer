FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --production

COPY . .

# Default value (will be overridden by CI/CD)
ENV DEPLOYMENT_GUID=unknown

EXPOSE 3000

CMD ["npm", "start"]