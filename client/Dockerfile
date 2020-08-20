# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

# Set the working directory to /client
WORKDIR /client/src

# copy package.json into the container at /client
COPY package.json /client/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /client
COPY . /client/

# Make port 3003 available to the world outside this container
EXPOSE 3020

# Run the app when the container launches
CMD ["npm", "start"]