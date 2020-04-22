# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.

#Documentation for Virus api
The information in this API are from my personal notes on viruses, and though I have a degree in microbiology, I'm by no means an expert in virology. So please keep in mind that some of the information may be inaccurate or out of date.

## Endpoints

### GET /baltimore
#### Parameter
type(required) - Needs to be a Roman numeral from I to VII

The viruses and their families in the database are sorted according to the Baltimore classification system. This endpoint returns a list of the families in the selected group.

### GET /families
#### Parameter
family(optional) - eg. Flaviviridae.

Returns a list of viruses.

### GET /host
#### Parameter
host-type
or
host-name

Returns a list of viruses by host.
