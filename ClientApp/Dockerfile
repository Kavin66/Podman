# Stage 1: Build the Angular app
FROM node:18 AS build

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli


COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app
FROM nginx:alpine

COPY --from=build /app/dist/client-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
