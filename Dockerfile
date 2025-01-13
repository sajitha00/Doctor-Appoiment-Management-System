FROM node:22

WORKDIR /usr/src/app

# Copy backend dependencies
COPY backend/package.json backend/package-lock.json ./
RUN npm ci

COPY backend .

# Copy admin dependencies
COPY admin/package.json admin/package-lock.json ./
RUN npm ci

COPY admin .

# Copy frontend dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend .

EXPOSE 4000 5173 5174

CMD ["npm", "start"]