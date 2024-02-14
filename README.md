Finnplay test task


Instructions:
    1. clone https://github.com/karabass92/finnplay.git repository on your local machine
    2. project starting
        2.1 with docker
            2.1.1 in project directory use command 'docker-compose build' to build the image
            2.1.2 use command 'docker-compose up -d' to start both client and server containers
            2.1.3 follow http://localhost:3000 link to access client app
            2.1.4 to stop project containers use command 'docker-compose down'
        2.2 without docker
            2.2.1 make sure that 20.10.0 or later version of nodejs, 10.2.3 or later npm version are installed on your local machine
            2.2.2 make sure that 14.2.0 or later version of 'serve' is installed globaly
            2.2.3 use command 'npm installed' from both client and server directories of the project (to install nescessary project dependencies)
            2.2.4 in server directory use the command 'npm run start:prod' to start the server app
            2.2.5 in client directory use the command 'npm run build' and the 'npx serve -s build' (to start client side app)
            2.2.6 follow http://localhost:3000 link to access client app
            2.2.7 to stop project stop both server and client terminals


Two users to test are exist:
    1.  {
            login: 'player1',
            password: 'player1'
        }
    2.  {
            login: 'player2',
            password: 'player2'
        }