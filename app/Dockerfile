FROM node:20-alpine

WORKDIR /app

COPY app/package.json ./
RUN npm install

COPY app/. .

# Default value (will be overridden by CI/CD)
ARG DEPLOYMENT_GUID
ENV DEPLOYMENT_GUID=${DEPLOYMENT_GUID}

EXPOSE 3000

CMD ["npm", "run", "build"]