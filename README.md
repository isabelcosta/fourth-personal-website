# isabelcosta.github.io

Hey there!

This is the code for my personal website https://isabelcosta.github.io forked from [Hylia](https://github.com/andy-piccalilli/hylia).
As sometimes I am lazy, I love to use Open Source templates to build my websites. I was atracted by Hylia, template for being so easy to setup and having some accessability features out of the box.

> Hylia is a lightweight [Eleventy](https://11ty.io) starter kit with [Netlify CMS](https://www.netlifycms.org/) pre-configured, so that you can one-click install a progressive, accessible blog in minutes. It also gives you a well organised starting point to extend it for yourself.

### Setup

Install depepndencies:
```
npm install
```

Run the project:
```
npm start
```

See it live at http://localhost:8080/

### Structure

- `src/posts` folder contains all the blog posts as `.md` files
- `.eleventy.js` contains the logic of the blog post collections
- ...

### Branches

- `source` has the source code of the website
- `master` has the files that result from building the website and that will be used by GitHub Pages

### Posts configuration

I added a couple additional options to the posts frontmatter. Here's some:

- `featured`: if set to **true**, the post will show up on homepage
- `override_url`: if set to a value, this will serve as the link to the post when listed
- `note`: if set to **true**, it will not show up together as most posts but in a specific section of `/posts`, where these are considered short form posts with no date associated, in the list.
