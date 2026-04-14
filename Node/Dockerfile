# 1. Base image
FROM node:18-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package files first (important for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy remaining files
COPY . .

# 6. Expose port (match your server port)
EXPOSE 3000

# 7. Start app
CMD ["node", "server.js"]