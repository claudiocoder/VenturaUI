FROM node:21-alpine3.19 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Set the environment variables (if needed)
ENV NODE_ENV=development
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

EXPOSE 3000

CMD [ "npm", "run", "dev" ]