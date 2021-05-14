#nodeイメージをpullする
FROM node:10.15.3-alpine

#working directory
WORKDIR /app

# nppm install
RUN npm install && \
    npm install -g @vue/cli && \
    npm install --save axios vue-axios

#vuecli 
# RUN npm install -g @vue/cli

# axios install
# CMD ["npm", "install", "--save", "axios", "vue-axios"]
# RUN npm install --save axios vue-axios