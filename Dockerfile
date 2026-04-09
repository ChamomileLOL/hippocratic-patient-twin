# STEP 1: Use a verified Node.js image as the "Progenitor"
FROM node:18-alpine

# STEP 2: Set the Working Sanctuary
WORKDIR /app

# STEP 3: Copy the "Covenant" (Dependencies) first to optimize caching
COPY package*.json ./

# STEP 4: Install the life force (Production only to keep it clean)
RUN npm install --production

# STEP 5: Copy the Anatomy (The rest of the code)
COPY . .

# STEP 6: Expose the "Respiratory Port" (5000 for the Physician)
EXPOSE 5000

# STEP 7: The Final Breath (Starting the server)
CMD ["node", "server.js"]