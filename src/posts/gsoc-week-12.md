---
title: Google Summer of Code | Coding Period | Week 12
date: '2018-08-06'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-12-e14533ce7159
---

![](/images/gsoc-week-12-cover.png)

This week — July 30 to August 5 — was the 12th week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189), [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-12) for this week.

---

Although I have to improve the documentation, I also have to improve the final product, in this case, the Android application, and prepare for the final demonstration of my GSoC work for next week (6th-10th August).

At this moment, the Android application is my biggest concern because I really wanted to have a good Minimum Functional Product at the end of the [GSoC program](https://summerofcode.withgoogle.com/), and this part of the work was delayed. I spent a lot of time [developing the backend](https://github.com/systers/mentorship-backend). This is not a bad thing since the backend had to be stable before starting the [frontend development with the mobile application](https://github.com/systers/mentorship-android). During this program, I noticed that time estimations for development are not easy at all. In my past job, I notice this as well. We sometimes overestimate or underestimate the time to develop a feature. A lot of things can vary this time of development. Some examples can be some inexperience I might have with a certain technology or problem that I have to solve. Also, the time that I might wait for my PRs to be reviewed, then improved and merged. Developing software using best practices may take some time and that’s ok. Best practices such as having people review your work before merging into the main branch can avoid bugs and single accountability of the code merged by the developer of the pull request.

When I proposed this project idea for GSoC, I wanted to have the mobile application and the backend as complete as possible at the end of the program. But at the same time, I wanted this to be an open source project, that could be contributed by open source contributors so that this wouldn’t depend totally on me to work out well. Part of what I tried to do during the program, was to promote the project within the community to welcome people to get involved in the project. In this way, I can get the community interested in contributing to the project and build this up into a great Mentorship System.

### Development tasks

Regarding the backend, we had to restructure the response from Mentorship Relation API. We were only sending the id of the users and for the UI screens that shows the Mentorship Relations, we show the name of the users. So I submitted [PR #123](https://github.com/systers/mentorship-backend/pull/123) on [systers/mentorship-backend](https://github.com/systers/mentorship-backend) repository to fix the API response.

This week I configured for the first time, a project to have [Travis CI](https://travis-ci.org/) support. I did this for the Android application. I created the .travis.yml so that every time we push new code to the mobile application, Travis builds the application to see if everything goes right and the build does not fail. In this way, we can avoid pushing code that does not compile. One thing that really helped me to do this was looking into other open source projects’ .travis.yml from the community. For this task, I submitted [PR #16](https://github.com/systers/mentorship-android/pull/16).

Regarding the [Android application](https://github.com/systers/mentorship-android), I submitted [PR #17](https://github.com/systers/mentorship-android/pull/17) with the initial screens, Register, Login screen and Main authenticated screen with a bottom navigation. While I was waiting for this to be merged, I continued developing other UIs using [ConstraintLayout](https://developer.android.com/reference/android/support/constraint/ConstraintLayout). I also submitted yesterday [PR #25](https://github.com/systers/mentorship-android/pull/25) with the Members List and Member Profile implementation.

![Members List and Member Profile UI submitted on PR #25 (2 screens on right are scrolled down)](/images/gsoc-week-12-members-list.png)

Finally, this next week, starting August 6th, I, my mentors and my admin will wrap up my GSoC work. After this, I will post a final weekly post with some reflection about the opportunity to participate in this program.
