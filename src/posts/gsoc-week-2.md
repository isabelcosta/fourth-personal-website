---
title: Google Summer of Code | Coding Period | Week 2
date: '2018-05-27'
tags:
  - gsoc
crossposts:
  medium: https://medium.com/isabel-costa-gsoc/google-summer-of-code-coding-period-week-2-4019568eabd2
---

![gsoc plus systers logos](/images/gsoc-week-2-cover.png)

This week — May 21 to May 27 — was the second week of the coding period of [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) with [Systers Open Source](https://github.com/systers). If you want to know more about this you can read the [introduction to my journey](https://medium.com/isabel-costa-gsoc/intro-to-google-summer-of-code-with-systers-open-source-dbdaa92bd189) or [my first weekly blog post](https://medium.com/isabel-costa-gsoc/coding-period-week-1-e8f878f46ad9).

At the beginning of this week I had a 1:1 meeting with one of my mentors, [Murad](https://github.com/m-murad), to clarify some doubts about my code before doing the first pull request with code of at least 4 feature issues and other small features. Since this project is being done from scratch, we need to have a base architecture for the next features to be based on.

The main action items for this week were 2 APIs:

- One for a User to login into the system;
- Another for the User to edit its profile.

## Features implemented

After the 1:1 meeting, I had to fix some endpoints of the API and implement some other features. These were the main features I implemented until now:

- For security measures, when the user registers (POST /register) to the application, instead of saving the password in plain text, the system saves its hash. I followed the example from [this snippet from flask website](http://flask.pocoo.org/snippets/54/) to save the hash and to check it during the authentication and changing the password;
- Authentication into the system can be done not only with username + password but with email + password as well. This is mainly done by using [flask-JWT](https://pythonhosted.org/Flask-JWT/), which does all the hard work of generating an access token, and makes a lot easier to identify a specific user by its token;
- The first User of the system is automatically an admin, with privileged actions;
- An admin can assign another User to be an admin. This is done with this endpoint — POST /admin/new. This endpoint is restricted to authenticated admins;
- A User can update its profile, mainly the fields that aren’t filled in the registration phase, such as bio, occupation, location, skills, etc… The endpoint responsible for this is PUT /user, while authenticated;
- The User can check its own profile with GET /user, while authenticated;
- The User can check others profile with GET /users/{id}, while authenticated;
- Verified Users can be seen with GET /users/verified;
- A User can change its password with PUT /user/change_password, while authenticated.

This [Pull Request (PR) comes with all of these first features](https://github.com/systers/mentorship-backend/pull/14/).
This weekend, I also fixed some [Codacy](https://www.codacy.com/) warnings. In case you’re unfamiliar with [Codacy](https://www.codacy.com/), this does automated code reviews regarding code style and other aspects of the code.

## Takeaways

Aside from implementing these features, I attended the project weekly meeting, GSoC Happy hours and stayed involved with the community apart from GSoC related issues.

These last weeks I started learning a new framework, [flask](http://flask.pocoo.org/), by watching tutorials, reading blog posts, and checking open source sample projects. Comparing to the week before, now I feel much more comfortable with [Flask-RESTPlus](http://flask-restplus.readthedocs.io). This was part of my roadblocks during the coding phase. Although I’m still a beginner at using flask, I’m quicker to implement some feature, now that I have a base architecture and solved some issues while learning the new framework. It’s always challenging to learn a new thing, but it is also rewarding being able to leave the comfort zone and learn how to be a beginner at something again.

One issue I’m still facing is figuring out how to make tests for flask apps, that cover each module of the projects, i.e., resources responsible to serve the endpoints, DAO objects, abstraction with the database and so on. I’m hoping to start doing some mock tests in small steps until I start feeling more comfortable with it.

I have to say that a lot of my work is facilitated due to people open sourcing sample projects and blogging about their experiences. I find this extremely helpful. Here are some open sourced projects that I’ve been looking into with regards to [flask-RESTPlus](http://flask-restplus.readthedocs.io): [postrational/rest_api_demo](https://github.com/postrational/rest_api_demo) and [frol/flask-restplus-server-example](https://github.com/frol/flask-restplus-server-example).
