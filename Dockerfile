# Use Node as a parent image
FROM node:12.18-alpine3.9

RUN mkdir -p /src/app

# Copy the current directory contents into the container at
COPY . /src/app

# Set the working directory to
WORKDIR /src/app

COPY package.json ./

# install dependencies
RUN npm install

# Make port 6000 available to the world outside this container
EXPOSE 6000

# Run the app when the container launches
CMD ["npm", "start"]