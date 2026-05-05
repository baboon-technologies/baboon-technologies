FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

ENV VITE_SUPABASE_URL=https://mhsttxbecjqseudipdtl.supabase.co
ENV VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oc3R0eGJlY2pxc2V1ZGlwZHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4Mjg2OTMsImV4cCI6MjA4NzQwNDY5M30.JPk4-txJS7hnNPNmuNpRIZUbLkyMhjykYchXAbczW2M

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN printf 'server {\n\
    listen 3000;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
