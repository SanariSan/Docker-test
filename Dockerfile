# Stage-1 : build_stage
FROM node:14 as build_stage
# create/set workdir
WORKDIR /usr/docker_test
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
WORKDIR /usr/docker_test
# copy and cache package files
COPY package.json yarn.lock ./
# install modules and cache them
RUN yarn install --pure-lockfile --production
# copy all the other project files
COPY --from=build_stage /usr/docker_test/dist ./dist
# copy dotenv to main directory (idk if this is alright)
COPY .env ./
# expose port
EXPOSE 3000
# run app
CMD yarn start-prod
