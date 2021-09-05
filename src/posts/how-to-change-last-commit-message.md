---
title: How to change last commit message
date: '2020-11-21'
featured: true
description: Often I have to change commit messages from my last commit, this is how I do it.
tags:
  - git
crossposts:
  medium: https://isabelcmdcosta.medium.com/how-to-change-last-commit-message-77a7036a32c7
  devto: https://dev.to/isabelcmdcosta/how-to-change-last-commit-message-3oha
---

Often when making changes to code, I commit them and then have to change to commit I just made, either because I think the commit message could be better or I had to make a last-minute change to the code I wish to include in the commit.

### Change last commit message

So consider I committed changes with the following command (`-m` to write one line commit message):
```
git commit -m "fix: big feature X"
```

Here’s how I fix the commit, using the `--amend` option.
```
git commit --amend -m "fix: small feature X"
```
In case I want to add additional code to the commit, I run `git add <file>` before running `git commit --amend`.

### Verify new commit message

To check that it worked and I fixed the right commit I check the latest commit with:
```
git log --oneline
```

I use `--oneline` because I just want to see the commit messages, instead of also seeing the name and email of the author of the commit. You’ll an output similar to this, where you can see the last commit has the correct message:

```
1792519 (HEAD -> master, origin/master, origin/HEAD) fix: small feature X
701aa33  docs: add instructions to README
(END)
```
In my environment, this will open vim, which I close by typing `:q`.

### Fix pushed commit

In case I already pushed to the remote repository the commit I want to fix, I force the push to remote to update the commit. Preferably, you are working on a feature specific branch, which does not affect the main one (in case this messes the git history for some reason). So this is what I would run, where `<branch>` is the branch you are working on (e.g.: `master`).
```
git push -f origin <branch>
```

----

Hope this helps you fix the last commit message.
