---
title: Google Summer of Code | Coding Period | Week 7
date: '2018-07-02'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-7-2e8e4f1b206d
---

![](/images/gsoc-week-7-cover.png)

This week — June 25 to July 1— was the fourth week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189), [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-7) for this week.

### Non-technical work

This week, my mentor [Murad](https://github.com/m-murad), deployed the [backend](https://github.com/systers/mentorship-backend), I’m working on, to [Amazon Web Services (AWS)](https://aws.amazon.com). So this can already be used by community members without the need to run the project and test it locally. So I started the presentation slides to do a demo of the [Mentorship System backend](https://github.com/systers/mentorship-backend) and test it in front of community members. I also want to encourage the community to test the backend API intensively through the Swagger UI to receive feedback and detect potential bugs.

On Thursday, I wrote a blog post about Mentorship System, presenting the idea and the motivation behind this project I proposed for GSoC. After writing it I shared with the community to receive feedback before publishing it and then I submitted to [Systers Open Source medium’s publication](https://medium.com/systers-opensource).

### Technical work

I’ll explain some features of the application and backend already discussed and their implementation.

#### Delete/Reject/Cancel a mentorship relation or request APIs

In the Mentorship System, we have users that can both be a mentor or a mentee in a 1:1 relationship. In this mentorship relation, we’ll have a user that takes the action to send a mentorship request to another user.

**Delete a mentorship request**

-   **Feature:** A user that sends the request should be able to delete this, once the user is no longer interested in having a mentorship relation with the other user.
-   **Implementation:** Submit [PR #73](https://github.com/systers/mentorship-backend/pull/73) with the API implementation to delete a mentorship request. For this, I created `DELETE /mentorship_relation/{id}` API and developed the tests. Only the user that sends the request can delete this request.

**Reject a mentorship request**

-   **Feature:** The user that receives a mentorship request should be able to reject a mentorship request if this user is not interested in it.
-   **Implementation:** Submitted [PR #62](https://github.com/systers/mentorship-backend/pull/62) with the API implementation to reject a mentorship request. For this, I created `PUT /mentorship_relation/{id}/reject` API. This API is also restricted to authenticated users. Only the receiver of the request can reject this.

**Cancel a mentorship relation**

-   **Feature:** During a mentorship relation, both the mentor and the mentee should be able to cancel the relation if this is no longer working for the users involved.
-   **Implementation:** Submitted [PR #61](https://github.com/systers/mentorship-backend/pull/61) with the API implementation to cancel a mentorship request. For this, I created `PUT /mentorship_relation/{id}/cancel` API, developed the DAO function to interact with the database and implemented tests for this. The API is restricted for authenticated users. Both of the users involved in the mentorship relation can cancel it.

**Get all mentorship relations and requests**

-   **Feature:** The users should be able to check the pending, previous, and current requests.
-   **Implementation:** Submitted [PR #74](https://github.com/systers/mentorship-backend/pull/74) with the API implementation to get all mentorship requests or relations. This is still being reviewed so the endpoints aren’t confirmed yet. Although, we already discussed the logic of this feature: pending requests are requests which weren’t accepted by the receiver and the end date of the relation has not passed yet; the current mentorship relation is the only relation which is currently accepted by the receiver of the request, so it’s ongoing; The previous mentorship relations are defined as having an end date passed the current date.

![Snippet of the Swagger Documentation on Mentorship System API](/images/gsoc-week-7-swagger.png)

#### Using flask-jwt-extended instead of flask-jwt

I replaced the usage of [flask-jwt](https://github.com/mattupstate/flask-jwt) for [flask-jwt-extended](https://github.com/vimalloc/flask-jwt-extended) which provided me with more flexibility to define my error messages depending on the exceptions thrown on the backend (e.g.: error for invalid or expired authentication token). This new extension also provided me with flexibility on the checks performed on POST /login API. This library also appears to be actively maintained. For this I submitted [PR #64](https://github.com/systers/mentorship-backend/pull/64).

#### Background scheduler to complete mentorship relation

-   **Feature:** A mentorship relation is defined within a period of time, with a start and end date. A relation which was accepted by the receiver of the request and is ongoing ends in the end date defined for the relation.
-   **Implementation:** I’m implementing a background scheduler (cron job) using [apscheduler library](https://github.com/agronholm/apscheduler) to check every day for mentorship relations in the `ACCEPTED` state which the end date has passed the current date, and marks it as with the `COMPLETED` state. This is still in progress because I have yet to test this.

#### Email verification feature final retouch

I implemented some changes to the previously sent [PR #53](https://github.com/systers/mentorship-backend/pull/53). The changes include improvements on the email template (according to the project weekly feedback), a new endpoint for a user to be able to resend a confirmation token to its email and allowing only users with the email confirmed to login into the app.

![2nd version of the email template for email confirmation](/images/gsoc-week-7-conf-email.png)

#### Export Swagger documentation and Postman collection in json format

I’ve been studying a way to export the [postman](https://www.getpostman.com/) and [swagger](https://swagger.io/) collection, without having to manually download the swagger json file or set up a postman collection manually. I already started developing following the flask-restplus documentation on both [postman](https://flask-restplus.readthedocs.io/en/stable/postman.html) and [swagger](https://flask-restplus.readthedocs.io/en/stable/swagger.html) exporting.

### Plans for next week

-   Present to the community what I have from the Mentorship System Backend;
-   Finish the cron job to complete a mentorship relation;
-   Have this week’s PRs merged;
-   Discuss mobile application development!
