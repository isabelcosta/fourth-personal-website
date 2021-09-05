---
title: Google Summer of Code | Coding Period | Week 8
date: '2018-07-09'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-code-coding-period-week-8-c10271254a67
---

![](/images/gsoc-week-8-cover.png)

This week — July 2 to July 8— was the fourth week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189), [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-8) for this week.

### Non-coding tasks

I asked for the “[Mentorship System by Systers](https://medium.com/systers-opensource/mentorship-system-by-systers-52dbe1275d9f)” to be published on [Systers Open Source medium publication](https://medium.com/systers-opensource), after waiting for some feedback from the community.

I [presented the Mentorship System Backend](https://docs.google.com/presentation/d/1dcnb1GQXR7LPiknADsbNY9b0kTKY2dZt3WSfED4ntfU/edit?usp=sharing) to the community and [opened it for testing](http://systers-mentorship-dev.eu-central-1.elasticbeanstalk.com/). I presented with the purpose not only to show my work to the community but to explain how to test the system. After presenting in the Community Open Session, I also announced in relevant channels of [Systers Open Source slack](http://systers.io/slack-systers-opensource/) that anyone could start testing the [backend](https://github.com/systers/mentorship-backend) (anyone including newcomers and other contributors). I showed how someone could test the backend using [Swagger](https://swagger.io/) UI and [Postman](https://www.getpostman.com/), the constraints and test case examples.

![Slides from the Backend demo presentation](/images/gsoc-week-8-presentation.png)

Aside from the presentation I also created a [Google Docs regarding Quality Assurance](https://docs.google.com/document/d/1kStdMWK9K93zlsjIFbU2fODE98NK3a4nJGtYtBEyrlo/edit?usp=sharing), to help guide contributors that want to help test testing the system. I documented test cases where the outcome is either a success or a failure. Here’s an example of a group of tests cases for accepting a mentorship request feature.

![Excerpt from the Quality Assurance Google Docs with test case for accepting a request feature](/images/gsoc-week-8-test-case-doc.png)

This week I started looking into [Material Design](https://material.io/design/) to develop a more high fidelity wireframe than the first one I did in the Community Bonding period. I also thought about the minimum features of the future mobile app, to get done until the end of the GSoC coding period (in 5 weeks).

### Coding tasks

I submitted a [PR #75](https://github.com/systers/mentorship-backend/pull/75) to restrict GET /users API to authenticated users. This endpoint was very useful while testing the [backend](https://github.com/systers/mentorship-backend) during its development, but for a complete feature, this endpoint has to be restricted so that only users of this system can see other users profiles and they can only see public data (defined by the user being displayed).

The task that took me more time of the week was implementing a cron job to complete a mentorship relation. I ended up creating a cron background scheduler using [apscheduler](https://apscheduler.readthedocs.io) library. With the cron job I scheduled a function to run every day at 23h59. This is needed to complete mentorship relations which are passed their end date. For this, I submitted [PR #79](https://github.com/systers/mentorship-backend/pull/79).

I also searched a lot to debug an issue we were having with the deployed server. The Authorization header wasn’t being received in the server side. I didn’t know where this issue was coming from, first I thought it was from [flask-jwt-extended](https://github.com/vimalloc/flask-jwt-extended), then after a lot of research, I noticed that we needed to [configure Apache to pass the Authorization headers to the WSGI application](http://modwsgi.readthedocs.io/en/develop/configuration-directives/WSGIPassAuthorization.html), our flask app. Enabling passing of authorization headers meant setting the WSGIPassAuthorization directive to On value. To solve this issue, I worked with one of my mentors, [Murad](https://github.com/m-murad), that dealt with the server deployment and helped me a lot to have the [backend](https://github.com/systers/mentorship-backend) ready for testing.

### Plans for the next week

-   Have a wireframe to follow while developing the Android application;
-   Test extensively the backend and create bug reporting issues (if needed);
-   Fix bugs found while testing the backend;
-   Start the base of the Android application.
