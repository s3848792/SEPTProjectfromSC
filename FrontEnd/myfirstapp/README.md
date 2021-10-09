## Dockerisation Notes

To run these commands, you may be able to run within intellij however for me it only worked running it in wsl once intellij was closed. I think this is because intellij keeps some files open in the background which stops docker from building properly.

To build the docker image, run the following:
### `docker build -t frontend .`

Then, once that is done, use the following to start the frontend
### `docker run -it -p 3000:3000 -d frontend`

Now it is running.

To test it is running, you can go to localhost:3000 to see the webpage.

To stop the server, run the following command
### `docker kill <CONTAINER ID>`

To get the container ID, run the following:
### `docker ps`


This project is a demo for Basecode SEPT2021 assignment for the front-end. It has been integrated with back-end

Please send your questions to amirhomayoon.ashrafzadeh@rmit.edu.au  



## Run Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

