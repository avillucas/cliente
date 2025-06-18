# Use a Node.js base image
FROM node:20-alpine
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Build the application for production (optional, for production deployments)
#RUN npm run build
# Expose the port Vite uses (default is 5173 for development)
EXPOSE 5173

# Command to run the Vite development server
CMD ["npm", "run", "dev"]