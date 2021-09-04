---
title: Google Summer of Code | Coding Period | Week 1
date: '2018-05-20'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/coding-period-week-1-e8f878f46ad9
---

![gsoc and systers logos](/images/gsoc-week-1-cover.png)

This week — May 14 to May 20 — was the first week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey here](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189).

## Introduction

The Coding Period is where the students are dedicated to coding their projects. This period has 3 phases separated by evaluations. 
I and the mentors agreed, during a project weekly meeting on the Community Bonding phase, on the action items for the first 4 weeks, which represent the 1º phase of the Coding Period. These action items were then base for my mentors to create the issues so that I could start developing.

## My work items

After defining the main action items for the 1º phase of the coding period, we distributed them among the 4 weeks. This week I had two action items, for the backend development:

- API to register a new User in the system;
- API to send verification email for new Users.

## Roadblocks I had during this week

First I have to explain some roadblocks I faced this week. Aside from the GSoC program, I’m finishing my Master’s thesis this month. Because of this I still had thesis meetings with my supervisors and I had to start preparing for my Dissertation presentation. This took me some time of the week.
Besides this, I’m not used to developing backend, although this is something I wanted to explore. Since the 1º phase of the coding period requires that I develop a version of the backend with [flask](http://flask.pocoo.org/), I had to study this. I started studying in the Community Bonding period but it wasn’t enough, I still had to experiment in sample projects and watch more video tutorials (provided by one of my mentors), which I did this week. This lack of experience with backend slowed down my initial development. On top of this, I had a problem with my PC, which led me to format the PC, taking me a big portion of an entire day.

## What I did this week

Having the roadblocks out of the way, I still managed to do some part of my working items. After learning a bit about how to develop using [Flask-RESTPlus](http://flask-restplus.readthedocs.io), I started developing the base architecture of the backend, by implementing the 1º action item — REST API to register users into the mentorship system. I also coded Users [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations (e.g.: list, update and delete users). I did this already using SQLAlchemy, with the [flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org) extension, which eased a lot of the development. Besides this, I also managed to implement a part of authentication features, with J[SON Web Tokens (JWT)](https://jwt.io/). I did this by using another extension of [flask](http://flask.pocoo.org/), [flask-JWT](https://pythonhosted.org/Flask-JWT/).

## Development and technologies I used

I’m developing with [Python](https://www.python.org/) 3.x and [flask](http://flask.pocoo.org/) on my fork of the [systers/mentorship-backend](https://github.com/systers/mentorship-backend) repository. You can see the latest version of the code in the [gsoc18-code](https://github.com/systers/mentorship-backend/tree/gsoc18-code) of the main repository.

These are the main extensions of [flask](http://flask.pocoo.org/) that I used during this week:

- [Flask-RESTPlus](http://flask-restplus.readthedocs.io/) — an extension for flask that facilitates REST APIs development. This also helped exposing [Swagger](https://swagger.io/) documentation.
- [Flask-JWT](https://pythonhosted.org/Flask-JWT/) — an extension for flask to add basic [JWT](https://jwt.io/) features to a flask. This was used specifically for User authentication with a username and a password, then returning an access-token to login into the System.
- [Flask-SQLAlchemy ](http://flask-sqlalchemy.pocoo.org/)— an extension for flask that adds support for [SQLAlchemy](http://www.sqlalchemy.org/). This allowed me to add persistence to the application, in an easy and flexible way.

## Setting up the development environment

I’m developing on [Ubuntu OS](https://www.ubuntu.com/). These are the other tools I’m using for the development:

- [Virtualenv ](https://virtualenv.pypa.io/)— This allows the creation of isolated Python environments;
- [Postman ](https://www.getpostman.com/)— API Development Environment that allows me to test the REST API;
- [PyCharm ](https://www.jetbrains.com/pycharm/)— Python Integrated Development Environment (IDE) by JetBrains;
- [Atom ](https://atom.io/)— Open source text editor by Github.

## Final observations

I’m a bit late on the actual schedule since I didn’t implement the API to send an email verification yet, and I still have to finish the tests for my code. Nevertheless, I already started implementing some working items from the next weeks, such as Login and Edit profile API. Despite this, I working towards compensating the lost hours with my roadblocks and managing my time wisely.

This week has been a little stressful because of all the roadblocks, I’m very glad that I had my mentors support and understanding. This support really helps me keep calm.
