---
title: My Eleventy website setup
date: '2021-05-14'
tags:
  - tech
---

My current website is build with [Eleventy](https://www.11ty.dev/).

This is originally a fork of [github.com/andy-piccalilli/hylia](https://github.com/andy-piccalilli/hylia). I loved this template as soon as I saw it. A big plus, was the accessability features it brought, once very interesting Dark vs Light mode.


I use `source` branch to have my source code and `master` branch is where I have the files generated during build into `dist` folder.



GitHub Actions: https://github.com/peaceiris/actions-gh-pages

GitHub Pages: https://pages.github.com/

Repository > Settings > Secrets

I set `ACTIONS_DEPLOY_KEY` which is the environment variable that my GitHub actions workflow is expecting.


References:

- https://iamdanielmarino.com/posts/deploying-my-eleventy-site-to-github-pages/