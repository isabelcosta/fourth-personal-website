---
title: That time I contributed to Scala Exercises website
date: '2021-03-07'
tags:
  - open-source
crossposts:
  medium: https://code.likeagirl.io/that-time-i-contributed-to-scala-exercises-website-c85978b7b057
---

As a beginner in contributing to open source, you might not be sure of how to start contributing. I want to tell you about a **contribution I have made to an open source project I used.**

Often I explain to people who want to start contributing, that they can look into projects they already use. This is what I did when I contributed to [scala-exercises.org](https://www.scala-exercises.org/) website content.

## Identifying a potential contribution

I was working through [FP IN SCALA](https://www.scala-exercises.org/fp_in_scala) exercises, from "Functional Programming in Scala" book, in particular, I was doing the [Property Based Testing](https://www.scala-exercises.org/fp_in_scala/property_based_testing) section.

I noticed there was a typo where the syntax for the [scala language](https://www.scala-lang.org/) was incorrect. Instead of showing `||`, which means logical or in Scala, it was showing `\\` that does not show correctly what it should be.

I also noticed that one of the exercises' numbers was incorrect, in this case appearing duplicate. So instead of showing exercise `8.17` it was showing `8.18` when referring to problems from 8.17 section.

## Looking how to contribute

So once I found what I could improve on the website, I looked at the project's [contribution guidelines](https://github.com/scala-exercises/exercises-fpinscala/blob/master/CONTRIBUTING.md) and noticed that the process was fairly simple and there was no requirement for creating an issue before sending a pull request (PR).

So I decided to create a pull request to it, one for each change since they address different concerns.

I checked where the code I was supposed to change lived, so I could make the change. This was fairly easy because the page with the exercises had a link to the file on the respective repository that hosts the code. This was visible in an "Edit exercises" button at the bottom of the page, as well as a "View on GitHub" button on the top of the page. You can check the [page I changes here](https://www.scala-exercises.org/fp_in_scala/property_based_testing).

## Contributing

I clicked the link, which took me to the file I need to change. At this point, I started the process of contributing. I [forked the repository](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) - creating a copy of the repository on my GitHub account. Then since the changes were fairly simple, I did not have to [clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to my development environment, I did the change using GitHub GUI (graphical user interface). There I edited the file then created the branch and committed the changes.

After changing the code, I submitted the pull requests for my changes.

- Fix exercise 8.9 function name from "\\" to "||" => [scala-exercises/exercises-fpinscala/pull/55](https://github.com/scala-exercises/exercises-fpinscala/pull/55)
- Fix wrong exercise number for Ch. 8 => [scala-exercises/exercises-fpinscala/pull/57](https://github.com/scala-exercises/exercises-fpinscala/pull/57)

Eventually, one of the maintainers thanked me and merged my PRs. I also get to be in contributors mention in the page I changed :)

---

So as you see, I fixed 2 typos that improved the content of the website. My change helped the page content be more clear, to someone using the project. I loved doing this contribution.
