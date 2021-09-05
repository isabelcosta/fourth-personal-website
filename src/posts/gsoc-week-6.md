---
title: Google Summer of Code | Coding Period | Week 6
date: '2018-06-25'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-6-64e8660530fe
---

![](/images/gsoc-week-6-cover.png)

This week — June 18 to June 24 — was the fourth week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189) , [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-6) for this week.

I’ll start with a shout out to [Systers](http://systers.io/) organization and then speak about the technical issues I tackled this week.

### Shout-out to Systers

[Systers community](http://systers.io/) is really welcoming and caring about their students. One of the things that I really like is time and energy investment they do to help students in career development. One example from this week was a session scheduled to help GSoC students review or create their CV/Resume. They did this because there was some demand for CV/Resume reviews. The session was initially divided into 2 parallel sessions with different targets (e.g.: some needed a resume targeted for a specific job/scholarship opportunity and other needed just to review existing CVs). These sessions were joined later. Admins helped us reviewing the resumes, but I want to highlight [Ramit Sawhney](https://medium.com/u/5a131e8c1c06), one of this year’s GSoC mentor, that was present for about 3 hours giving extensive tips and reviewing resumes one by one, from at least 9 students.

### Development tasks

These are some of the technical tasks I was involved with. I’ve been developing in the [gsoc18-code branch](https://github.com/systers/mentorship-backend/tree/gsoc18-code) of [systers/mentorship-backend](https://github.com/systers/mentorship-backend) repository.

#### Support for environment variables

One task I accomplished this week was to add support to read environment variables ([PR #51](https://github.com/systers/mentorship-backend/pull/51)). In order to avoid disclosing sensitive data and push it into the git repository, the app needed to have support to environment variables. In this way sensitive data such as a SECRET\_KEY can be exported with:

```
export SECRET_KEY=<app-secret-key>
```

And later imported within the app like this:

```
import os

(…)

secret_key = os.getenv(‘SECRET_KEY’)

(…)
```

This support is also very helpful for the email verification feature since we also need to use credentials from an email account to send the emails on behalf of the Mentorship System.

#### Email Verification

Speaking of email verification, this is almost done. This week I cleared some doubts I had about this feature so that I could complete it. I have already the email being sent to the newly registered user. I already have [PR #53](https://github.com/systers/mentorship-backend/pull/53) with most of the work done. Here’s the first version of the email being sent, which will be updated according to this week’s feedback.

![1º version of the email template](/images/gsoc-week-6-email-conf.png)

I mentioned [“Handling email confirmation in Flask”](https://realpython.com/handling-email-confirmation-in-flask/) blog post in a previous post, but I haven’t used it until this week. This post was critical to speed up my development on the email verification feature. This post is packed with the basics that I needed to make the functionality work, from generating the unique token to verify the email, to the email template rendering to be sent via email. This is also possible because of the [Flask-Mail](https://pythonhosted.org/Flask-Mail/) extension.

#### Revoke admin user role

The issue to revoke an admin role was in the product backlog for some time but with lower priority. Because I was waiting on other PRs to be merged so that I could move on with mentorship relation feature, I started cleaning up some issues, such as this one to revoke an admin role from a user. I also cleared some doubts about this in the project weekly meeting, so that I could have the PR with the correct business logic. I submitted [PR #54](https://github.com/systers/mentorship-backend/pull/54) for this.

#### Accept mentorship request API

This weekend I finally finished one very important feature, accepting a mentorship relation request. This feature took some time to understand according to the database model and to establish the constraints and logic. I developed this and did some tests to ensure that the business logic was respected. I submitted [PR #58](https://github.com/systers/mentorship-backend/pull/58) for this.

#### Applying application factory pattern

One problem I was facing was that I couldn’t get the tests for the API services to work. I was just able to test other modules of the flask application, as the database models and the data access objects (DAOs). I wasn’t able to simulate requests to the API. I have been looking into this problem from time to time but giving it less priority. This week I finally tackled this. I already had a feeling that this had something to do with the app’s structure. The problem was with the initialization of the flask application object and its extensions. These flask extensions were not initialized with the app together. When getting the application object in the tests, the application would come without the extensions initialized. So I tried out a design pattern, application factory pattern, which is recommended in the flask website [here](http://flask.pocoo.org/docs/1.0/patterns/appfactories/). Finally, I got this to work by creating as recommended a function create\_app() that would return the application with all the extensions lazily initialized. I submitted [PR #57](https://github.com/systers/mentorship-backend/pull/57) for this issue.

### Plans for next week

-   One of the things that I started studying was the possibility to export automatically the swagger and postman collection through the [flask-RESTPlus](http://flask-restplus.readthedocs.io/) extension that helps to document the API with specific annotations;
-   Once the PR regarding the application factory pattern, get merged do more tests to cover the REST API;
-   Implement API to reject/cancel/complete a mentorship relation;
-   Present the [backend](https://github.com/systers/mentorship-backend) in the Community Open Session;
-   Open the [backend](https://github.com/systers/mentorship-backend) for the community to test it.
