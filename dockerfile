# Step 1: Build the Vite app using Bun
FROM oven/bun:1.0 AS builder

WORKDIR /app
ARG VITE_CURRENCY_API
ENV VITE_CURRENCY_API=$VITE_CURRENCY_API

COPY . .
RUN bun install
RUN bun run build

# Step 2: Serve the built app using Nginx
FROM nginx:alpine

# Copy build output to nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]