---
title: Google Summer of Code | Coding Period | Week 3
date: '2018-06-03'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-3-349e08f7d998
---

![](/images/gsoc-week-3-cover.png)

This week — May 28 to June 3 — was the third week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189) , [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-3) for this week.

These first weeks, I’ve been balancing GSoC and my Master’s thesis work. Next week I’ll present my dissertation and then I can fully focus on GSoC work. Even with the thesis I still managed to get some work done.

This week I had these 3 pull requests (PR) merged:

-   Add Swagger documentation for Login API [#20](https://github.com/systers/mentorship-backend/pull/20);
-   Add initial tests that cover the majority of database models and data access object (DAO) [#16](https://github.com/systers/mentorship-backend/pull/16);
-   Update pull request template, to have checklist items to update swagger and postman JSON files. These files must be updated every time someone updates the API functionalities [#27](https://github.com/systers/mentorship-backend/pull/27).

I also created [some issues on GitHub and organized them](https://github.com/systers/mentorship-backend/issues?utf8=%E2%9C%93&q=is%3Aissue+created%3A2018-05-28..2018-06-03+author%3Aisabelcosta) on the [ZenHub](https://www.zenhub.com/) board. In case you’re unfamiliar with [ZenHub](https://www.zenhub.com/), this is an agile project management tool for [GitHub](https://github.com). Some of these issues were based on bugs found by one of my mentors, [Murad](https://github.com/m-murad), and other issues were discussed at this week’s project meeting.

### Challenges

This week I had to squash commits on multiple occasions. For [my first PR](https://github.com/systers/mentorship-backend/pull/14), I had to squash some commits of a branch, which did not include the most recent commit ([here’s a stack overflow answer that helped me](https://stackoverflow.com/questions/24310554/how-do-i-squash-specific-commits-on-a-local-branch/24310701#24310701)). For some of my next PRs I had to squash all commits of a certain branch. I never find my self in any of these scenarios before, so it was quite challenging learning about this. I eventually learned how to squash commits, with some tips from the community and one of my mentors, [Dilushi](https://github.com/Dilu9218). After the second instance of squashing the commits, I was much more comfortable at doing this, for the case where I squashed all the commits of a branch.

Because I was still getting acquainted with flask backend development, I wasn’t doing tests and applying [Test-Driven Development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development) methodology yet. I was still trying to figure out what was the best way to structure the app to allow me to test each separate module of the app, from DAOs to data model objects and the API itself. So I dedicated a large portion of this week to learn how to test the code. I implemented some basic tests, just to have an idea of how to test the project from now on. Although tests are a very important part of the project development, for now doing all the possible combination of tests wasn’t a priority, this can be done gradually and implemented for the next features. Also, we now have a more stable structure, than in the first weeks, and I understand a bit more of test development for flask applications. Another point is that by having this project open source, anyone can help to add more tests to the project during the GSoC period as well.

I fixed [Swagger](https://swagger.io/) documentation of the backend API so that anyone can test the whole API, using the [Swagger UI](https://swagger.io/tools/swagger-ui/) instead of just using [Postman](https://www.getpostman.com/) (how I usually to test the API). I learned how to use [flask-RESTPlus](http://flask-restplus.readthedocs.io) framework to both document header authorization field and request body. The authorization field is required for some endpoints that require login with an access token.

### Shout-outs to blog posts and open source projects

This week, I discovered other great GitHub open source sample projects that helped me in the learning journey. One of these projects — [mjhea0/flaskr-tdd](https://github.com/mjhea0/flaskr-tdd) — shows how to approach TDD using flask applications. Another project that I found was [mjhea0/flask-basic-registration](https://github.com/mjhea0/flask-basic-registration). These two projects were done by [Michael Herman](https://github.com/mjhea0).

I also searched about how to implement email verification for new users, which I’m aiming to start implementing next week. I found [this blog post](https://realpython.com/handling-email-confirmation-in-flask/) on this topic, which seems very useful, from [Real Python](https://realpython.com/) website. Here’s the [project from the blog post on GitHub](https://github.com/realpython/flask-registration).

Another great article that I found was [“How to structure a Flask-RESTPlus web service for production builds”](https://medium.freecodecamp.org/structuring-a-flask-restplus-web-service-for-production-builds-c2ec676de563) by [Greg Obinna](https://medium.com/@gregobinna). I intend to look more into this in the next days. The GitHub project used for this blog post can be found in [cosmic-byte/flask-restplus-boilerplate](https://github.com/cosmic-byte/flask-restplus-boilerplate).

### Plans for next week

-   Fix bugs found by my mentor and solve small tasks, until thesis presentation;
-   Implement email verification;
-   Start implementing features related to users mentorship pairing (probably after thesis presentation);
-   Create some issues, approved by my mentors, for new contributors to help out. These will be labeled as “first timers only”, which is the Systers label used to guide newcomers into easy quick issues to get started with open source contributions for [Systers Open Source](https://github.com/systers).

