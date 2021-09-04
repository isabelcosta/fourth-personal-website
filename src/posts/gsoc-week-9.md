---
title: Google Summer of Code | Coding Period | Week 9
date: '2018-07-16'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-9-4affc5a70580
---

![](/images/gsoc-week-9-cover.png)

This week — July 9 to July 15— was the fourth week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189), [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-9) for this week.

I focused a lot of time developing the UI prototype for the Android application, which I’ll explain in the end. Apart from this, I did other types of tasks.

### Project management tasks

I had a 1:1 with my mentor, [Dilushi](https://github.com/Dilu9218), to agree on how to create issues regarding Quality Assurance and how to approach this. We thought about how to spread the word about contributing to the project through manual testing, how to present to the community tasks that do not involve coding but involve testing the backend and can be worked by multiple contributors who wish to test multiple test cases and report bugs. So we created the [first issue #86](https://github.com/systers/mentorship-backend/issues/86) that shows a few test cases that contributors can follow to do their testing and has a link to the [Quality Assurance Google Docs I created last week](https://docs.google.com/document/d/1kStdMWK9K93zlsjIFbU2fODE98NK3a4nJGtYtBEyrlo/).

### Development tasks

My mentor, [Murad](https://github.com/m-murad), shared a blog post to help me configure the backend to be able to connect with a remote MySQL database from [Amazon Relational Database Service (RDS)](https://aws.amazon.com/rds/).  
This post, [“Deploying a Flask application on AWS”](https://medium.com/@rodkey/deploying-a-flask-application-on-aws-a72daba6bb80), is very descriptive and showed me how simple it was to use another type of URI to use other types of databases. For this, I submitted [pull request #89](https://github.com/systers/mentorship-backend/pull/89).

I also fixed a bug reported by a first-time contributor of Mentorship System, [Bethany Rentz](https://github.com/bethanyr), while doing manual testing. Here’s the bug report [issue #83](https://github.com/systers/mentorship-backend/issues/83).

### Project Weekly Meeting

In this week’s meeting, I shared my proposal for the Android application features for 3rd coding phase. Basically, I divided into 3 major stories: User, Mentorship Relation, and Tasks. This was my proposal of main feature stories:

-   Week 10: User arc;
-   Week 11: Mentorship Relation arc;
-   Week 12: Tasks arc;
-   Week 13: buffer week to complete unfinished tasks and fix any critical bug.

As a reminder in this system, we have users that have 1:1 mentorship relations with each other, where one is the mentor and the other is the mentee. The mentorship relations can have tasks associated, created by the mentor or the mentee.

Other important decisions done during the meeting was how the Android application was going to be developed. We agreed on using Kotlin to develop the Android application. This was a major doubt of mine since all the Android applications are developed in Java, I didn’t know if the community wanted to stick with Java. My mentors and project manager agreed on using kotlin since my mentors were comfortable and open to this approach and this would add a new skill set to the community, where other contributors could learn and contribute using kotlin. This is also a possibility because I’ve used kotlin before, both in work and side projects, so I can use it now without having to learn it from scratch. We also agreed on using [Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html). This was an architecture I’ve heard before but never applied to a project. I’m excited to learn more about this and Android architecture components I never used before.

### UI Prototype Design tasks

This week I looked into Material Design to design the UI prototype of high fidelity for the Mentorship System so that I can follow it while developing the Android application. For this, I created the very first issue of the systers/mentorship-android repository, [issue #1](https://github.com/systers/mentorship-android/issues/1).

I used JustInMind prototyping tool, which is very intuitive and easy to use. Here’s the [public link for the UI prototype](https://www.justinmind.com/usernote/tests/35756605/35766303/35777319/index.html), this is being actively improved with community’s feedback.

The latest screens I designed were the Tasks feature screen. I intend to write a post regarding the design of the UI prototype of Mentorship System. Here’s an image of these screens and a comparison with the before and what I propose for this feature. I already shared this with the community, now I’m waiting for some feedback until the next project weekly meeting.

[**MSPrototype**  
_Generated by Justinmind on Fri Jul 20 21:51:28 UTC 2018_www.justinmind.com](https://www.justinmind.com/usernote/tests/35756605/35766303/35777319/index.html "https://www.justinmind.com/usernote/tests/35756605/35766303/35777319/index.html")[](https://www.justinmind.com/usernote/tests/35756605/35766303/35777319/index.html)

![UI Redesign of Tasks feature](/images/gsoc-week-9-ui-design.png)

### Open Source community tasks

This week I started hosting Ask Me Anything (AMA) sessions dedicated to newcomers, where I would be available in a [Google Hangout](https://hangouts.google.com) call to answer any questions newcomers might have about how to start contributing, how I got into open source, my google summer of code experience and how to participate in Open Source. I came to [Systers Open Source](http://systers.io/) community in March this year, so I was a newcomer before. I know that sometimes it can be very intimidating speaking out in the open on Slack in front of the whole community. So I wanted to show newcomers that this is just intimidating in the beginning and it sure can be confusing but it does not have to be like that.

![First announcement about my Ask Me Anything (AMA) sessions](/images/gsoc-week-9-ama.png)

### Plans for next week

-   Host more AMA sessions;
-   Fix bugs and merge conflicts from new pull requests from Backend;
-   Start implementing in Kotlin the User arc feature;
-   Create more issues for newcomers and first-time contributors for the Mentorship System to contribute.
