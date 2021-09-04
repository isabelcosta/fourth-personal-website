---
title: Google Summer of Code | Coding Period | Week 5
date: '2018-06-18'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-5-740cda442109
---

![gsoc and systers logos](/images/gsoc-week-5-cover.png)

This week — June 11 to June 17— was the fourth week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189) , [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-5) for this week.

## Reviewing database model design

I started the week with questions regarding the data model and the logic behind the mentorship feature. So in a 1:1 meeting with [Dilushi](https://github.com/Dilu9218) I tried to clarify these doubts. One thing [Dilushi](https://github.com/Dilu9218) taught me this week was that when designing systems, with similar features to existing systems, we can take a look at them and learn from them since these have already passed through the thought process for the feature we’re analyzing. This reminds me of a saying, that most of the times we don’t have to reinvent the wheel. Also, this helps us designing a good database model, which is important since future feature development will depend on this. From this meeting, we observed that a mentorship relation request is similar to a friendship/connection request on Facebook/LinkedIn, although it has its differences.

I started implementing a part of the API and data model, related to the mentorship relation feature. In a POST request body data for a mentorship request, I was expecting the IDs of the mentor and mentee, as well of the sender and receiver of the request. My mentors had already advised me that having both sender and receiver user ID, might not be necessary. In the 1:1 meeting, we found a blog post that presented “[Facebook Style Friend Request System Database Design](https://www.9lessons.info/2014/03/facebook-style-friend-request-system.html)”, which helped me understand we only needed one field to know who was the sender and the receiver. This field would represent just the sender, the one user that took the action to send a request. Because mentor and mentee ID have to be the same as the sender and receiver of the request, we could infer the receiver just by knowing the sender user.

After this meeting I started researching about database design and normalization, to optimize the data model scheme. I was refreshing my memory from what I learned before in database course in college. So I found a [Udacity](https://udacity.com) online course to help me understand more about this topic. I watched some videos that I found relevant from the “[Database Systems Concepts & Design](https://eu.udacity.com/course/database-systems-concepts-design--ud150)” online course.

Another resource I found very helpful was a video called “[How to do Database Normalization](https://www.youtube.com/watch?v=UDFRhj_K508)” on YouTube. This really helped me understand about the trade-off of flexibility and performance of normalization of database models, and when this normalization is needed or not. I started to see some potential areas for normalization in our current data model. So I was ready to discuss this in the project weekly.

## Importance of having a MVP

In the project weekly, I was about to discuss some potential areas for improvements and doubts about some features when my mentor [Murad](https://github.com/m-murad) thought me another lesson. I was trying to a very good data model and the complex features already established and to be implemented. [Murad](https://github.com/m-murad) showed me that for a first-time project it’s important to have first an [minimum viable product (MVP)](https://en.wikipedia.org/wiki/Minimum_viable_product), and then improve upon receiving feedback from the community and its users. This also refers to an Agile development methodology, that I’m still learning and adjusting to. We’ll develop product deliverables, with minimum features that can be used by our target users, and then improve this in every development sprint. This led us to simplify a lot of the features, in a way that would not compromise the database design already defined and knowing that this could be later improved (e.g.: with database migrations). These simplifications helped me set realistic goals for the Mentorship System development during GSoC.

Some of the simplified features are:

- When a User sends a request, this will not be editable by the receiving user;
- When a User accepts a request, the mentorship relation starts automatically, and both users cannot receive requests during the accepted relation.

## Completed tasks

I dedicated this week to implement the API for mentorship relation feature, regarding sending a mentorship request between two users and listing all of these requests. I submitted [PR #47](https://github.com/systers/mentorship-backend/pull/47). In this PR I fixed the Mentorship data model, did tests for the new API and fixed other tests.

## Plans for next week

I plan to finish the mentorship relation feature API. This includes the following:

- Handling the following states: pending (sender awaits receiver’s response); accept (from the receiver to the sender); reject (from the receiver to the sender); cancel (from sender or receiver during a mentorship relation); completed;
- I’ll take a look into how to develop a cron job to set the mentorship relation into the complete state after the end date passes;
- Finish email verification feature.

## Lessons learned

- When doing something that might resemble a common feature in other existing systems, we can learn from these that already went through a thought process;
- It is important to have first a minimum viable product, instead of doing all the complex features in the first version of an app. We can start with an MVP and then improve a product after receiving feedback from users.
