# AutoComplete

Welcome to my AutoComplete app. This app will be utlizing dummyjson data to help provide users to populate
in the searchbox when typing. 

Stack:
Typescript
React
Tailwindcss
Docker

Github: https://github.com/CodingWithMooney/AutoComplete.git

Run local
1. Clone the repo in your machine
2. cd into /autocomplete
3. To launch server
    - Open one terminal or cmd
    - npm install
    - npm run start 
    - You will be able to see your server running at http://localhost.com:4000
4. To launch client
    - Open second terminal or cmd 
    - npm install
    - npm run dev


Run with Docker

Docker:
    Install here: https://docs.docker.com/get-docker/

How to run locally with Docker:
1. Open a terminal and clone the repo into your directory
2. Start docker on your machine and make sure you are in your /autocomplete directory
3. Run docker-compose -f docker-compose.dev.yml up -d --build
4. You will see the image running the following:
    Client: http://localhost.com/5173
    Server: http://localhost.com/4000

TODO:
- Implement jest tests for code
- Publish repo