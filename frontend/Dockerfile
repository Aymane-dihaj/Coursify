# Use the official Node.js 18 image as the base (non-Alpine)
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
