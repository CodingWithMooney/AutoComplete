# AutoComplete

Welcome to my AutoComplete app. This app will be utlizing dummyjson data to help provide users to populate
in the searchbox when typing. 

Stack:
Typescript
React
Tailwindcss
Docker

Github: https://github.com/CodingWithMooney/AutoComplete.git

Docker:
    Install here: https://docs.docker.com/get-docker/

How to run locally with Docker:
1. Open a terminal and clone the repo into your directory
2. Start docker
3. Run docker-compose -f docker-compose.dev.yml up -d --build
4. You will see the image running the following:
    Client: http://localhost.com/5173
    Server: http://localhost.com/4000

TODO:
- Docker is stuggling to run after build for client
- Fix up / for api server
- Implement jest tests for code
- Publish repo