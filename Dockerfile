# Use official Node image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# App listens on port 8080 (required by Cloud Run)
EXPOSE 8080

# Start the server
CMD ["node", "app.js"]
