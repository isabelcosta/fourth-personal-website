---
title: Google Summer of Code | Coding Period | Week 11
date: '2018-07-30'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-11-799f11918c62
---

![](/images/gsoc-week-11-cover.png)

This week — July 23 to July 29 — was the eleventh week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189), [my latest weekly blog posts](https://medium.com/isabel-costa-gsoc) or [my weekly status report](https://github.com/systers/mentorship-backend/wiki/GSoC-2018-Isabel-Costa#weekly-status-report-for-week-11) for this week.

### Documentation

I tried to maintain the documentation as complete as possible during the GSoC program in many ways. This is a very important part of our work since this is open source, other contributors might want to contribute to the project or if we ever become inactive, others can continue our work within the community. I take a lot of notes about everything we discuss on the project weekly meetings so that our discussions are properly documented for other members of the community to see. I also created two docs during the Community Bonding period, regarding the [Backend](https://docs.google.com/document/d/1qDTJK-ItAaek5ZBSLd4i8ShxLDcU5D2b4ZdIBTNxEJM/edit?usp=sharing) and [Application](https://docs.google.com/document/d/1RhYMjyd1yhAWarO7spRWOYm-KNgFsO9rNgO6ssnEC-o/edit?usp=sharing) features on Google Docs to let others know more about the project’s idea, features, system design decisions and implementation.

![Documentation organization on Google Drive](/images/gsoc-week-11-documentation.png)

The past two weeks the GSoC students presented a live demo for the work completed on Phase I & II. This was for documentation purposes and to serve as training for the final demo which is going to be live on Youtube at the end of the GSoC. I got good feedback from my presentation and advises. One interesting thing was that one GSoC student that attended my live demo, [Baani](https://github.com/BaaniLeen), showed me that when I tested the backend while presenting, it was much more clear how to test for quality assurance. This is something I tried to incentive others to do, but at that moment I understood that I had to be more clear and provide more documentation perhaps regarding testing the backend. I created a Google Docs while back with test cases for each feature to guide contributors and testers, as well a step by step guide on how to login into the Mentorship System using the Swagger UI. Also regarding what to actually test, is normal if new contributors don’t know enough about the project to come up with test cases to test the project features so I may have to add more documentation on that.

Another task I did this week, was creating the [“How to Contribute” Wiki page](https://github.com/systers/mentorship-backend/wiki/How-to-Contribute) for [systers/mentorship-backend](https://github.com/systers/mentorship-backend) GitHub repository regarding ways that a new contributor can help the Mentorship System. These ways include much more than coding, this page includes sections for documentation, quality assurance, outreach and incentive to participate in Slack discussions regarding the project. I also created a wiki for the Android project, which is still a bit empty but will surely be improved as the project progresses.

As another part of documentation tasks, [I saved all the UI designs, I made using JustInMind, on the Google Drive folder](https://drive.google.com/open?id=1Nkhrxjbuh3_Z_rCww4Z2dQWgkCg7tiiZ) where students may save their work. I did this by using [a feature provided by the tool that allows me to export the designs as images](https://www.justinmind.com/support/how-to-export-your-wireframes-to-image-files/). This is crucial because if we ever lose access to the [JustInMind UI prototype link](https://www.justinmind.com/usernote/tests/35756605/35766303/35777319/index.html), we’ll still have the designs.

### User Interface (UI) Design Hacks

This week I continued to work on the Android application and one of the tasks I had to do was the bottom navigation. For the Bottom Navigation with 5 items, I used 4 icons of the [Material Design icons](https://material.io/tools/icons/). The one that was not from Material, I created it inspired by a GSoC student’s suggestion that shared a similar image, but I felt that wasn’t totally aligned with Material Design, so I created my own version of it (in PNG format with copy, paste, and cuts). This icon is shown in the next image, it is the middle one with the label “Relation” that represents the current mentorship relation a User is involved with.

![Bottom navigation designed for Mentorship Android Application](/images/gsoc-week-11-bottom-nav.png)

To use this in the Android Application I wanted an [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) icon format so I created the image again so that I could later export to a valid SVG file. I created this with 2 arrows on [draw.io](http://draw.io) and [Material Design’s person icon](https://material.io/tools/icons/?icon=person&style=baseline). Once the image was edited I used [Inkscape](https://inkscape.org/) to resize and play with the icon, but then I was having some problems so I took a crop at the image and used [Online Converter](https://www.online-convert.com/) to convert the icon to an SVG. Then I copied again to [Inkscape](https://inkscape.org/), saved and then I imported the resulting SVG file to Android Studio.

![Importing the SVG icon to Android Studio](/images/gsoc-week-11-vector-asset.png)

### Developing Android application

I continued learning about Android Development using MVVM, RxJava, and android architecture components. I tried to learn best practices of developing an application with these components and architecture. I had multiple 1:1s with Murad, one of my mentors that showed me areas of improvement on the code I was developing to bootstrap the project.

Regarding UI development, at first, I was hesitant about using Constraint Layouts because I just didn’t know how to use them. First times I used them I didn’t understand if I was doing things right. Then I figured that this was used by manipulating views with drag and drop on design tool from Android Studio, so I decided to give it a real try since my mentor advised me to use them.

I wanted to know why and how I should use Constraint Layout so I researched about it and came across a really nice talk on this topic, [“Mastering ConstraintLayout in Android”](https://www.youtube.com/watch?v=rzmB3UxxhaA) by [Rebecca Franks](https://twitter.com/riggaroo).  
This made me feel more comfortable about using these layouts and understanding that this avoids nested views, therefore, improving performance when Android draws the UI.

This Sunday I tried Constraint Layouts for a User Profile view which is used to show and edit a User’s profile. This next image represents the screen designed for the User profile, implemented with ConstaintLayouts using textInputLayouts with editTexts and switches.

![Editing User profile screen Constraint Layouts on Android Studio](/images/gsoc-week-11-constraint-layout.png)

A quick shout-out to the community, I shared a bit of my frustration and inexperience with these types of layouts and got lots of helpful responses from community members.

![Asking doubts on Slack](/images/gsoc-week-11-ask-doubts.png)

### Time management

Usually, for project meetings, I start preparing the agenda over the week with questions, ideas, doubts, and updates about the Mentorship System (both backend and Android) to discuss with the admin and the mentors, and sometimes we go over the time (1 hour). This week I tried out something that really surprised me in a good way. I planned the time for the meeting, to discuss general briefing (10 min), the Android application (30 min), and the backend (20 min). What surprised me was that in the end there was one minute left and we had already discussed everything on the agenda. I was so excited about having structured the meeting and giving time estimation for each part and this working out.
