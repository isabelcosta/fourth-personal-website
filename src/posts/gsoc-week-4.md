---
title: Google Summer of Code | Coding Period | Week 4
date: '2018-06-11'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-4-52eb3bb0bf41
---

![systers logo with gsoc logo](/images/gsoc-week-4-cover.png)

This week — June 4 to June 10— was the fourth week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189) , [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-4) for this week.

This week I dedicated a lot of my time preparing for my thesis presentation, on June 7th. So I had to manage better my time to produce work for GSoC and still have a good preparation for my thesis. Now that I presented the thesis I can dedicate much more time for GSoC.

## Time and work management

Even with an intense thesis preparation I still managed to submit some PRs for small tasks, mostly bugs, at the beginning of this week. I understand that it is very important to be present and reachable when working remote. So I responded to all code reviews within 24 hours and stayed active on Slack, communicating with the community and my mentors. Also, it is important to keep the community informed of my workload, so I made sure to keep the [Google Calendar](https://calendar.google.com/) for my project updated with my limited availability and other commitments (related to my thesis).

An interesting thing I noticed this week is how the scrum check-ins help me keep accountable. Scrum check-ins are short messages we, GSoC students, have to post on [Slack](https://slack.com/) every Monday, Wednesday, and Friday of each week at 5 pm GMT+1 timezone. This helps me show that although I might be working more on the thesis, I’m still responsive and doing GSoC related work. One thing that helps me deliver these check-ins in time is to start writing or at least preparing the template for the next check-in, after the latest check-in, instead of doing this very near to the deadline.

I attended the project weekly meeting and discussed the mentorship relation feature. Since the First Coding Phase ends this week, I wanted to optimize the time to finish or at least start working on the most important feature of the Mentorship System, the mentorship relations. So I suggested to my mentors that we could re-prioritized the issues planned for this phase, giving priority to mentorship relation feature. After this re-prioritization, we reviewed the mentorship relation feature, the first fields I could work with and the APIs I could start developing.

## Completed tasks

One thing I really like to do is to organize issues, create them, adding labels and descriptive descriptions. This week I created more issues and broke some features into smaller issues, to keep the pull requests very focused on one small task and keep all organized.

Here’s a summary of this week’s completed action items:

- I solved bugs found the week before and responded to code review change requests — PRs [#33](https://github.com/systers/mentorship-backend/pull/33), [#34](https://github.com/systers/mentorship-backend/pull/34), [#35](https://github.com/systers/mentorship-backend/pull/35);
- I developed the Mentorship Relation database model, which will serve as the base for the APIs regarding the mentorship relation feature. The APIs include sending a mentorship request, accepting or rejecting a mentorship relation, and canceling a request — [PR #41](https://github.com/systers/mentorship-backend/pull/41);
- Created tests for app configurations — [PR #37](https://github.com/systers/mentorship-backend/issues/37);
- I changed the Login API response to return the expiry UNIX timestamp along with the access token —[PR #44](https://github.com/systers/mentorship-backend/pull/44);
- Created a function to validate the email regex — [PR#45](https://github.com/systers/mentorship-backend/pull/45).

## Presenting my work

This week the GSoC Happy Hour focused on showing off students’ work. GSoC Happy Hour is about spending some time getting to know fellow GSoC students and mentors. The latest ones have been focused on playing games together. This time, I got to demo the backend API I’ve been developing these last 4 weeks, and use the [Swagger UI](https://swagger.io/tools/swagger-ui/) to present the API functionalities. This was the first time I’ve demo this to someone (besides my mentors), and it was slightly intimidating but a good thing since other could see my work. I got to see other students work, as well, which helped me broaden my view of what others are doing and have an overview of what technologies are being used for the other projects.

## Shout-outs for blog posts

I spent an afternoon searching for a way to define the data model. The challenge of this was that Mentorship Relation is a relation between 2 instances of the same User data model. I researched about what type of relationship this would be (e.g.: many to many or one to many). To develop the Mentorship Relation database model I followed this blog post, [A SQLAlchemy Cheat Sheet](https://www.codementor.io/sheena/understanding-sqlalchemy-cheat-sheet-du107lawl) by [Sheena](https://www.codementor.io/sheena). The section that saved my day was “Multiple relationships with the same table”.

Another blog post that really helped me was [“Advanced configuration of Flask-JWT”](http://blog.tecladocode.com/learn-python-advanced-configuration-of-flask-jwt/) by [Jose Salvatierra](https://twitter.com/tecladocode). This helped me with getting the expiry UNIX timestamp for a [JWT](https://jwt.io/) access token, using the [flask-jwt](https://pythonhosted.org/Flask-JWT/) extension. What also helped me was looking at the [source code of this extension](https://github.com/mattupstate/flask-jwt/blob/master/flask_jwt/__init__.py). I wanted the expiry token to be sent along with the access token in the Login API response, thereby solving [issue #39](https://github.com/systers/mentorship-backend/issues/39).

## Plans for next week

- I already started working on the email verification feature while waiting for the mentorship relation data model PR to be merged.
- When this PR is merged, I’ll start working on the Mentorship Relation feature API. I plan to finish this API next week and do a demo in the Community Open Session, to present to the community the progress of the backend API.
