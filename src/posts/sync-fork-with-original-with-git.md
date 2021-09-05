---
title: Sync fork with the original repository using git
date: '2021-09-04'
description: How to sync forked repository with the original repository using git on the terminal
featured: true
tags:
  - git
  - tech
crossposts:
  devto: https://dev.to/isabelcmdcosta/sync-fork-with-original-repository-using-git-21ap
  medium: https://isabelcmdcosta.medium.com/sync-fork-with-the-original-repository-using-git-24da99df916a
---

When you want to contribute to an open source repository, you usually [fork a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) so you can do your changes and later submit them via a pull request. After forking the repository on GitHub, and cloning it into your local environment - `git clone <forked repository url>` - the repository will have a remote URL setup, usually named `origin`.

You can also do this using GitHub web user interface. Check [out the docs](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)! I already mostly use this option, but it’s always useful to know the basics of doing this with git.

To use as an example, I forked [anitab-org/documentation](https://github.com/anitab-org/documentation) repository into my GitHub account [isabelcosta/documentation](https://github.com/isabelcosta/documentation). When **cloning the repository I [used the SSH URL](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#about-remote-repositories) of my forked repository.** The commands I’ll mention will be running against the repository’s default `master` branch.

First, **check what remote URLs your project has set up** with:

```
git remote -v
```

Here the `origin` configuration will have the URL where your forked project is on GitHub (notice that my `isabelcosta` account username is there). I am also inside the root directory of the local clone of my forked repository.
```
~/dev/documentation > git remote -v
origin	git@github.com:isabelcosta/documentation.git (fetch)
origin	git@github.com:isabelcosta/documentation.git (push)
```

Now you can **add the new remote repository link to your remotes**. The `upstream` keyword is an alias for the original repository remote URL (replace `<url of original repository>` with this URL). You can pick another alias if you prefer.

```
git remote add upstream <url of original repository>
```

Notice that in this case, the link is pointing to `anitab-org` account - where the repository was originally forked from):
```
~/dev/documentation > git remote add upstream git@github.com:anitab-org/documentation.git
```

To **confirm the remote repositories you have set up**, the new `upstream` repository configuration should be there.
```
~/dev/documentation > git remote -v
origin	git@github.com:isabelcosta/documentation.git (fetch)
origin	git@github.com:isabelcosta/documentation.git (push)
upstream	git@github.com:anitab-org/documentation.git (fetch)
upstream	git@github.com:anitab-org/documentation.git (push)
```

With this setup, you can now **sync your repository locally** using pull/fetch code from the original repository. Here’s an example where I am pulling code from the original repository into my fork’s `master` branch:
```
~/dev/documentation > git pull upstream master
From github.com:anitab-org/documentation
 * branch            master     -> FETCH_HEAD
   85f3fdc..5854a22  master     -> upstream/master
Already up to date.
```

After updating my local branch, I usually also **update the fork on GitHub.** I push the new commits pulled from `upstream` to my `origin` forked repository (using the same `master` branch):
```
~/dev/documentation > git push origin master
Everything up-to-date
```

## Commands summary

- Check remotes: `git remote -v`
- Add a new remote: `git remote add upstream <original repository url>`
- Sync local repository: `git pull upstream <branch>`
- Update remote forked repo: `git push origin <branch>`
