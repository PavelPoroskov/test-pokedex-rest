#########################
### build environment ###
#########################

# base image
FROM node:10.16.0-jessie AS builder

WORKDIR /app
COPY client/package*.json /app/
RUN npm install --production
COPY client /app/

# RUN CI=true npm test
# generate build
RUN npm run build

##################
### production ###
##################

# base image
FROM nginx:stable

# copy artifact build from the 'build environment'
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/server.conf /etc/nginx/conf.d/default.conf

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
