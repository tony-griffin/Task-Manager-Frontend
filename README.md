# Task Manager Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- Node.js 12 (if you have NVM installed just run `nvm use`)

## Available Scripts

```
npm run start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

```
npm run build
```

Builds the app for production to the `build` folder.

## Docker scripts

If you wish to run the dockerised version of this application:

The Docker container is mapped to localhost port 3020 as default. You should map the host machines port to a port of your choosing.
( HostPort:DockerPort )

```
docker run -it -p 3020:3000 task-manager-frontend
```

Open [http://localhost:3020](http://localhost:3020) to view it in the browser.

### Backend repository:
https://github.com/tony-griffin/Task-Manager-Backend
