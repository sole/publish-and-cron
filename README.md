# publish-and-cron

> a simple repository to test publishing to github and using travis cron as well

## Commands

### `npm run build`

Creates an `index.html` in `output` with the current timestamp (you can use this to make sure it is working as expected).

### `npm run publish`

Publishes the page to the `gh-pages` branch, also pushes to remote (GitHub).

### `npm start`

Builds and publishes, using the commands above.

## You need to do a couple of things before this works 💯...

* Clone repo
* Run `npm install`
* Run `npm start` at least once locally (so the `gh-pages` branch is created and pushed)
* Go to **Repository settings**, make sure *GitHub pages* are enabled, and select the `gh-pages` branch
* You should be able to access your repo using the address displayed by GitHub (something like `[yourusername].github.io/[repositoryname]`)
* Enable this repository in Travis, from [your Travis dashboard](https://travis-ci.org/profile). If you don't have one, you'll have to create an account there. If you do, you might need to *Sync account*, so the repository shows up in the list. Then flick the switch on!
