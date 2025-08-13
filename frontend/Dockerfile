# Step 1: Build Vite app
FROM node:18 AS build

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Build args
ARG VITE_API_URL
ARG VITE_GOOGLE_CLIENT_ID
ARG VITE_RAZORPAY_KEY

# Pass all VITE_ variables to Vite build as env vars
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID
ENV VITE_RAZORPAY_KEY=$VITE_RAZORPAY_KEY

# Build Vite app
RUN VITE_API_URL=$VITE_API_URL \
    VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID \
    VITE_RAZORPAY_KEY=$VITE_RAZORPAY_KEY \
    npm run build

# Step 2: Serve with NGINX
FROM nginx:alpine

# Clean default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built static files
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
