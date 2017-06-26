# publish-and-cron [![Travis tests][travis-image]][travis-url]

> a simple repository to test publishing to github and using travis cron as well

## Commands

### `npm run build`

Creates an `index.html` in `output` with the current timestamp (you can use this to make sure it is working as expected).

### `npm run travis-publish`

Publishes the page to the `gh-pages` branch, also pushes to remote (GitHub). This only works when run inside the Travis environment.

## You need to do "a couple" of things before this works 💯...

* Clone repo
* Run `npm install`
* Go to **Repository settings**, make sure *GitHub pages* are enabled, and select the `gh-pages` branch
* You should be able to access your repo using the address displayed by GitHub (something like `[yourusername].github.io/[repositoryname]`)
* Enable this repository in Travis, from [your Travis dashboard](https://travis-ci.org/profile). If you don't have one, you'll have to create an account there. If you do, you might need to *Sync account*, so the repository shows up in the list. Then flick the switch on!
* Generate and set up deploy keys for the repository:
  * `ssh-keygen -t rsa -C "your_email@example.com"`
  * Add the contents of `id_rsa.pub` as a deploy key for your Github repository: in `https://github.com/<your name>/<your repo>/settings/keys` - make sure to allow 'write' access or Travis won't be able to push
  * Install Travis CLI client: `gem install travis`
  * Log into the CLI and encrypt the private key you generated, `id_rsa`:
    * `travis login`
    * `travis encrypt-file id_rsa --add` (will add the decrypt command to recreate `id_rsa` in the current folder as a `before_install` script in `.travis.yml`)
  * Delete `id_rsa` and `id_rsa.pub`: `rm id_rsa id_rsa.pub`
  * Add `id_rsa.enc` to git and commit: `git add id_rsa.enc; git commit -m 'add encrypted key'`
* Make sure the values in the `env` section in `.travis.yml` are correct, update where necessary

That should be it!



[travis-image]: https://travis-ci.org/sole/publish-and-cron.svg?branch=master
[travis-url]: https://travis-ci.org/sole/publish-and-cron
