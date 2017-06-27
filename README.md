# Landmarks

## Summary ##
  Users can upload pictures (or url of pictures if that's easier) that they find of places they want to go, but they're not sure what or where it is.

  API will return the location and user can add it to their favorites list.

## How to Get Started ##
  In your terminal run
  ```
  >npm install
  ```
  Install nodemon
  ```
  >npm install -g nodemon
  ```

  Auto restart your server using nodemon
  ```
  >nodemon app.js
  ```

  In a new terminal tab, auto re-compile your ES6 code with Babel
  ```
  >webpack --watch
  ```

  Preview your file in browser by going to localhost:3000


## About the Files ##

### .gitignore ###
Ignores the node_modules folder when pushing to GitHub.

### app.js ###
Very simple server so that the project can be deployed to Heroku.

### package.json ###
Have to have script: postinstall for Heroku to run the second package.json in the public folder.

### webpack.config.js ###
Configures Webpack to use Babel to compile all ES6 syntax into bundle.js in the public folder.


### public (folder) ###
Public folder where all your front-end code will be.

#### package.json ####
Installs all dependecies for React to run.

#### bundle.js ####
Do not edit this file. It will be auto updated by Webpack.

#### index.html ####
Basic HTML template. Imported all the React files so we don't have to type "import React from 'react'" in every single component.

#### src ####
Your app components.


