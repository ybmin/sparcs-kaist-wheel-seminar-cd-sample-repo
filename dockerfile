FROM public.ecr.aws/docker/library/node:lts
WORKDIR /usr/src/app

COPY . .

RUN npm i
EXPOSE 3001
CMD [ "npm", "start" ]
