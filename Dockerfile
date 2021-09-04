# Stage-1 : build_stage
FROM node:14 as build_stage
# create/set workdir
WORKDIR /usr/dockerization
# copy and cache package files
COPY package.json yarn.lock ./
# install modules and cache them
RUN yarn install --pure-lockfile
# copy all the other project files
COPY . .
# build the app
RUN yarn build


# Stage-2 : prod_stage
FROM node:14 as prod_stage
# create/set workdir
WORKDIR /usr/dockerization
# copy and cache package files
COPY package.json yarn.lock ./
# install modules and cache them
RUN yarn install --pure-lockfile --production
# copy all the other project files
COPY --from=build_stage /usr/dockerization/dist ./dist
# copy dotenv to main directory (idk if this is alright)
COPY .env ./
# copy script for db waiting
COPY ./wait-for-it.sh ./
# chmod script
RUN chmod +x ./wait-for-it.sh
# expose port, not used because of docker-compose 
# EXPOSE 3000
# run app, not used because of docker-compose
# CMD yarn start-prod
