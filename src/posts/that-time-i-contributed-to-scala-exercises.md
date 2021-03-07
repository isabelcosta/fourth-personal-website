---
title: That time I contributed to Scala Exercises website
date: '2021-02-28'
tags:
  - open-source
---

As a beginner in contributing to open source, you might not be sure of how to start contributing. I want to tell you about a contribution I have made to an open source project I used.

Often I explain to people who want to start contributing, that they can look into projects they already use. This is what I did when I contributed to scala-exercises website content.

## Identifying potential contribution

I was working through fp-in-scala exercises, from "Functional Programming in Scala". In particular, I was doing the [Property Based Testing](https://www.scala-exercises.org/fp_in_scala/property_based_testing) section.

I noticed there was a typo where the syntax for scala language was incorrect. Instead of showing `||`, that means logical or in Scala, it was showing `\\` that does not show correctly what it should be.

- Fix exercise 8.9 function name from "\\" to "||" => [scala-exercises/exercises-fpinscala/pull/55](https://github.com/scala-exercises/exercises-fpinscala/pull/55)
- Fix wrong exercise number for Ch. 8 => [scala-exercises/exercises-fpinscala/pull/57](https://github.com/scala-exercises/exercises-fpinscala/pull/57)

## Looking how to contribute

Here I looked at the project's [contribution guidelines](https://github.com/scala-exercises/exercises-fpinscala/blob/master/CONTRIBUTING.md) and noticed that the process was fairly simple and there was not a requirement for creating issue prior to sending a pull request (PR).

So I decided to create a pull request to it, one for each change since they address different concerns.

I checked where the code I was supposed to change lived, so I could make the change. This was faily easy, because the page with the exercises has a link to the file on the respective projects that hosts the code.

## Contributing

After learning where the code lived, I started the process of contributing. I forked the repository - creating a copy of the repository on my GitHub account. Then since the changes were fairly simple, I did not have to clone the repository to my development environment, I actually did the change using GitHub GUI (graphical user interface). There I edited the file then created the branch and committed the changes.

At this point, I submitted the pull request for my changes.
Eventually one of the maintiners thanked me and merged my PRs.

---

So as you see, I fixed 2 typos that improved the content of the website. This could cause confusion to someone using the project. This was a total valid contribution.
