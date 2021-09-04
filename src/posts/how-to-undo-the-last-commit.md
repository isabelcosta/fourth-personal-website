---
title: How to Undo the Last Commit
date: '2018-02-20'
featured: true
tags:
  - git
  - tech
crossposts:
  medium: https://code.likeagirl.io/how-to-undo-the-last-commit-393e7db2840b
  devto: https://dev.to/isabelcmdcosta/how-to-undo-the-last-commit--31mg
---

![Image from [Altassian tutorial](https://www.atlassian.com/git/tutorials/undoing-changes)](https://cdn-images-1.medium.com/max/2000/1*uc89vQwNgfqctnZg9PMfxA.png)

In this post I will show how I sometimes recover wrong changes (commits) in a coding project, using [git](https://git-scm.com/) on the command line.

### Why would I want to do this?

In my thesis, I’m working on a project that I develop in one environment, and then test in another environment composed of multiple virtual machines. So each important change that I do may have a significant impact on the functionalities of the project. Sometimes, the change I do might not have the result I expected. Then I have to see the changes and analyze the project’s behavior before and after the last commit.

### How do you see the last commit?

To test a specific commit, you need the hash. To get the hash you can run `git log` , then you get this output:

    root@debian:/home/debian/test-project# git log
    commit <last commit hash>
    Author: Isabel Costa <example@email.com>
    Date:   Sun Feb 4 21:57:40 2018 +0000

    <commit message>

    commit <before last commit hash>
    Author: Isabel Costa <example@email.com>
    Date:   Sun Feb 4 21:42:26 2018 +0000

    <commit message>

    (...)

You can also run `git log --oneline` to simplify the output:

    root@debian:/home/debian/test-project# git log --oneline
    <last commit hash> <commit message>
    cdb76bf Added another feature
    d425161 Added one feature

    (...)

To test a specific commit (e.g.: `<before last commit hash>`), that you think has the last working version, you can type the following:

    git checkout <commit hash>

This will make the working repository match the state of this exact commit.

After you do this you’ll get the following output:

    root@debian:/home/debian/test-project# git checkout <commit hash>
    Note: checking out '<commit hash>'.

    You are in 'detached HEAD' state. You can look around, make experimental changes and commit them, and you can discard any commits you make in this state without impacting any branches by performing another checkout.

    If you want to create a new branch to retain commits you create, you may do so (now or later) by using -b with the checkout command again. Example:

    git checkout -b new_branch_name

    HEAD is now at <commit hash>... <commit message>

After analyzing the specific commit, if you then decide to stay in that commit state, you can undo the last commit.

### How to undo this commit?

If you wish to [undo/revert the last commit](https://git-scm.com/docs/git-revert) you can do the following, using the commit hash that you get from the `git log` command:

    git revert <commit hash>

This command will create a new commit with the “Revert” word in the beginning of the message. After this, if you check your repository status, you’ll notice that you have the HEAD detached at the commit you tested before.

    root@debian:/home/debian/test-project# git status
    HEAD detached at 69d885e
    (...)

[You don’t want to see this message](https://www.git-tower.com/learn/git/faq/detached-head-when-checkout-commit), so to fix this and attach back the HEAD to your working repository, you should checkout the branch you are working on:

    git checkout <current branch>

During the making of this post, I found this tutorial — [Undoing Commits and Changes](https://www.atlassian.com/git/tutorials/undoing-changes) — by Atlassian, which describes this issue very well.

### Summary

* If you want to test the previous commit just do `git checkout <test commit hash>` ; then you can test that last working version of your project.

* If you want to revert the last commit just do `git revert <unwanted commit hash>` ; then you can push this new commit, which undid your previous commit.

* To fix the detached head do `git checkout <current branch>`.
