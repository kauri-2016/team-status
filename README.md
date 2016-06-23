# Team Status

> A real-time team status board

## Heroku Deployment Instructions

### Check the following:

1. You have a Heroku account.
2. You have Heroku Toolbelt installed.
3. You can login to Heroku on your command line with `heroku login`.

### Create app:

*From the command line*

1. Create a Heroku app
  - `heroku apps:create NAME_OF_YOUR_APP`
  - This will create an app on Heroku from your terminal, and automatically add it as a remote in your local repo. Run `git remote -v` in your terminal to see this.

2. Deploy to Heroku
    - `git push heroku master`

### Provision database

1. Provision a Postgres DB using the postgresql addon
  - `heroku addons:create heroku-postgresql:hobby-dev`
  - This can also be done on heroku.com from the 'addons' section. Look for 'heroku postgres'.

2. Now it's time to set up your database, so we need to login to the Heroku server
  - `heroku run bash`
  - This opens the terminal for your app hosted on Heroku. You will notice that it will be quite slow!

3. Run the migration and the seed file
  - `knex migrate:latest`
  - `knex seed:run`

4. If you see the application error page, type `heroku logs` into your command line in order to debug what may have gone wrong.
