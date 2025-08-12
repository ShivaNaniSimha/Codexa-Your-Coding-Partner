# Step 1: Build React/Vite app with Node.js 18
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Pass API URL at build time
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Build the app for production (Vite outputs to dist/)
RUN npm run build

# Step 2: Serve with NGINX
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from Vite's dist folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

