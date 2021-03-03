![MIT LICENSE](https://img.shields.io/github/license/mbmosman/habit-tracker-for-learning-japanese.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/mbmosman/habit-tracker-for-learning-japanese.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/mbmosman/habit-tracker-for-learning-japanese.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/mbmosman/habit-tracker-for-learning-japanese.svg?style=social)

# Habit Tracker for Learning Japanese

_Duration: 5 Wednesdays_ 

This application will help track progress studying Japanese through a variety of sources. The goal is to visualize progress to provide motivation and support to independent language learners. The application itself does not teach Japanese. It is a motivational tool to use alongside other resources to visualize and monitor overall progress. Commonly used tools are added initially to provide a starting point for a new learner. Additional tools and statistics can be added to customize the learning experience.

This project uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).


## Prerequisites

To run this project, make sure you have the following software installed:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)


## Local Setup

- Create a new database called `jp_habit_tracker` and run the SQL from the `database.sql` file to initialize the database.

  >If you want to add some dummy test data, you may optionally run the `database_test.sql` file to put create a user "testuser" with "testuser" as the password. This will allow you to log into an account with some existing data to see how the app works.

- Run `npm install` to get the dependencies.

- Create a `.env` file at the root of the project and the following into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). 

- Make sure postgres is running
- Start the server by running `npm run server`
- Start the client by running `npm run client`
- Navigate to `localhost:3000` to view the application

## Production Build

To deploy this code, run `npm run build`. This will create a build folder that contains the code to deploy to your server environment. To test this build:

- Make sure postgres is running 
- Run `npm start`
- Navigate to `localhost:5000` to view the application

Once deploying the build to the server, you'll also need to setup the environment variables as called out above for the `.env` file. How this is done will vary based on your production environment. You'll also need to setup the database on your server as well, using the `database.sql` file. In a production environment, there is no need for the test data in `database_test.sql`. 


