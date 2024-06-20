# Use the official Cypress image as the base image
FROM cypress/included:latest


# Install Firefox
RUN apt-get update && \
    apt-get install -y firefox-esr


# Set the working directory
WORKDIR /app


# Copy package.json and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm install


# Copy the rest of the application code
COPY . .


# Verify Cypress and Firefox installation
RUN npx cypress verify


# Command to run tests
CMD ["npx", "cypress", "run", "--browser", "firefox"]