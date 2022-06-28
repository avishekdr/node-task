# Node Task

Node Task developed by Avishek Datta Ray.

---

## Requirements

For development, you will need Node.js.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Linux

  You can install nodejs and npm easily with apt install, just run the following commands.

      sudo apt install nodejs
      sudo apt install npm

- #### Other Operating Systems

  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.18.3

    $ npm --version
    6.14.6

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    npm install npm -g

---

## Install

    git clone https://github.com/avishekdr/node-task.git
    cd node-task
    npm install

## Running the project in development mode

- Configure the env file as per your local system configuration

- Add a database in MySQL with name as `assignment`

- To start the project run:

        npm run dev

- To access the swagger use this URL: [Swagger-Doc](http://localhost:3000/swagger-doc/)
