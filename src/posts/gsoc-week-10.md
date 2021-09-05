---
title: Google Summer of Code | Coding Period | Week 10
date: '2018-07-23'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-10-191813534051
---

![](/images/gsoc-week-10-cover.png)

This week — July 16 to July 22 — was the tenth week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189), [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-10) for this week.

### Implementation decisions

This week a lot of the time I dedicated to studying [Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html) to apply to the [Mentorship System Android application](https://github.com/systers/mentorship-android). We first thought of implementing the Android application using Clean Architecture with Kotlin. After following some video tutorials and started learning about the architecture and I noticed that it involved a lot of module separation, a lot of boilerplate by creating entity mappers and interfaces, which for the first version of the Android application, that has to be developed with the minimum features for a minimum functional product, seemed too complex. At this moment, I have 2 to 3 weeks to build the application so this architecture wouldn’t be a good fit because of the learning curve. So I decided to follow a simpler approach by experimenting with another Android Design architecture besides [Model View Presenter (MVP)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter). I’m now using [Model View View Model (MVVM)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) also with Kotlin language.

As for Android library third-party libraries, I’m using Retrofit for communicating with a remote server. I’m also learning about [RxJava](https://github.com/ReactiveX/RxJava) which seems to be a very powerful tool used by Android developers, that would introduce a new programming paradigm to the community, reactive programming. Besides this tool I’m already taking advantage of Android Architecture components such as [ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel) and [LiveData](https://developer.android.com/topic/libraries/architecture/livedata), also I’m using [DataBinding](https://developer.android.com/topic/libraries/data-binding/) with [ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel). In the future for application persistence, as discussed in an Android general meeting within the community, we will use Room for the database.

This week I had a meeting with one of my mentors Murad where we discussed potential better ways to save Tasks related to a Mentorship Relation into the Database. I will study more about that but basically, Murad advised me of a potential scalability problem since tasks are entities that can be easily created in abundance for each relation, this can cause problems because to get tasks from a relation we will have to search in the whole table of all tasks of the system, to get all the tasks that are related to the specific relation. We agreed that I would search a bit on that to find a better solution that saving a task as a single item in a Tasks table.

### Shout outs to great work from the development community

I was an Android Developer for 2 years at a company until April this year, then I started developing [backend](https://github.com/systers/mentorship-backend) with [flask](http://flask.pocoo.org/) and [python](https://www.python.org/). To refresh my memory and get back to Android development, by learning about design architectures and tools used by Android developers, I’m googling a lot! I found a lot of good resources, such as videos, talks, blog posts and open source projects, that have a huge role in my learning journey. So here are some shout-outs to these resources.

-   Android Architecture Blueprints project: [googlesamples/android-architecture](https://github.com/googlesamples/android-architecture) repository on GitHub with a lot of Android design architecture patterns implemented;
-   [LiveData with SnackBar, Navigation and other events (the SingleLiveEvent case)](https://medium.com/google-developers/livedata-with-snackbar-navigation-and-other-events-the-singleliveevent-case-ac2622673150) by [Jose Alcérreca](https://twitter.com/ppvi) — helped me a lot understanding [LiveData](https://developer.android.com/topic/libraries/architecture/livedata) android architecture component;
-   [ericmaxwell2003/MvvmTipCalculator](https://github.com/ericmaxwell2003/MvvmTipCalculator) GitHub project by [Eric Maxwell](https://twitter.com/emmax);
-   [bufferapp/clean-architecture-components-boilerplate](https://github.com/bufferapp/clean-architecture-components-boilerplate) by [Buffer](https://github.com/bufferapp);
-   [isabelcosta/MoviesApp](https://github.com/isabelcosta/MoviesApp/) GitHub project made by Me — this was my first application coded 100% with Kotlin app, to refresh my memory about the programming language;
-   [Advanced Networking with RxJava + Retrofit](https://www.youtube.com/watch?v=q4eK3VFhnA0) by [Stephen D’Amico](https://twitter.com/sddamico) at Droidcon NYC 2017 conference;
-   [Intro to RxJava](https://www.youtube.com/watch?v=XLH2v9deew0), a talk by [Christina Lee](https://twitter.com/runchristinarun) at 360|AnDev 2016 conference— really nice talk about [RxJava](https://github.com/ReactiveX/RxJava) which made me feel a bit less intimidated about [RxJava](https://github.com/ReactiveX/RxJava);
-   [Simple Android MVVM using RX and Kotlin](https://medium.com/corebuild-software/simple-android-mvvm-using-rx-and-kotlin-9769a91b03ef), a blog post by [Ovidiu Latcu](https://twitter.com/ovy9086);
-   [Android Architecture Components Part 2 — Dependency Injection](https://www.thomaskioko.com/android-architecture-components-part-2-dependency-injection/), a blog post by [Thomas Kioko](https://twitter.com/code_wizard) — even though I might not use [Dagger](https://google.github.io/dagger/), for now, this really gave me the click I needed after through the last year reading and watching resources about [Dagger](https://google.github.io/dagger/).

Ultimately I found a lot of resources that helped me in one way or another, even if I only used the knowledge provided from just a paragraph of text or a gist of code. I cannot point to all the resources but I found these that I shared very helpful.

### Development tasks

This week my development tasks revolved around fixing bugs that were found by new contributors to the project during Quality Assurance testing.

I did my first full review [PR #105](https://github.com/systers/mentorship-backend/pull/105) from a new contributor on Mentorship System backend repository. I say full review because I’ve made some comments on other PRs from the community, but in this case, I was fully aware of the project so I made suggestions I considered important and needed for the issue that the PR was solving, like tests, extra data validation, commit message style, etc. It was really insightful giving suggestions and areas for improvements of other contributor’s work.

I also submitted the following pull requests:

-   [PR #95](https://github.com/systers/mentorship-backend/pull/95) regarding [issue #94](https://github.com/systers/mentorship-backend/issue/94) to solve user registration data validation;
-   [PR #107](https://github.com/systers/mentorship-backend/pull/107) to fix a bug of validation when updating the User’s profile ([issue #97](https://github.com/systers/mentorship-backend/issue/97)) found by a newcomer!

### Design tasks

I improved the [Mentorship System UI prototype](https://www.justinmind.com/usernote/tests/35756605/35766303/35777319/index.html) hosted on [JustInMind](https://www.justinmind.com/). I had discussions with my mentors on the project weekly and with my project manager in the Office hours, about what would be the best UI for a good user experience for the users regarding the Tasks screen. From the screen alternatives that I shared last week with the community, my project manager, May, did a poll to know what option was preferred.

![](/images/gsoc-week-10-ui-design.png)

The majority of the voters chose option 2, so I updated the UI prototype to fit the community’s feedback.

### New mentor and working with other GSoC student

This week I had a new mentor, [Roopal](https://github.com/roopalJazz), assigned to me to help us in this last phase of development. We had our first 1:1 for us to meet each other and to keep [Roopal](https://github.com/roopalJazz) on the loop of all the development and things to know about the project which could be important for a mentor.

A fellow GSoC student, [Sombuddha Chakravarty](https://github.com/sammy1997), that is developing a bot, [Sysbot](https://github.com/systers/sysbot), used on Slack and GitHub to help mentors and community members interact with [Systers Open Source](https://github.com/systers), integrated the bot in the [systers/mentorship-backend](https://github.com/systers/mentorship-backend) GitHub repository. So I took advantage of the Ask Me Anything session Sammy was hosting, to have a quick 1:1 where I could learn about the commands that I and my mentors should know to have a good workflow on GitHub in terms of assigning, approving issues and sending valid PRs that would not be closed by the bot.

I hosted more AMA sessions for newcomers to come and ask questions regarding open source in general, [Google Summer of Code](https://summerofcode.withgoogle.com/), how to get involved in the community.
