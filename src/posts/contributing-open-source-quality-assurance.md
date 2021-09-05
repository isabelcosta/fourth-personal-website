---
title: Contributing to Open Source in Quality Assurance
date: '2021-03-21'
featured: true
tags:
  - open-source
crossposts:
  medium: https://medium.com/anitab-org-open-source/contributing-to-open-source-in-quality-assurance-caf33a0c41ef
  devto: https://dev.to/isabelcmdcosta/contributing-to-open-source-with-quality-assurance-1n8e
---

Did you know you can contribute to Open Source with Quality Assurance? Usually while building software, there is some component of quality assurance or testing involved, so that also applies to open source projects. When I think of quality assurance of a project I think of testing in general, which includes writing unit tests, integration tests, manual testing, performance testing, documenting test scenarios, ...

Contributing to Quality Assurance (QA) helps to ensure the overall quality of the project since it can help to detect bugs early and faults in how the feature was implemented.

## Ways to contribute

So here are some examples of how to contribute to Quality Assurance of an open source project:
- **Test manually a pull request code** before it gets accepted to be merged, to confirm the code is working as expected. Be creative! Try to come up with test cases for the feature being implemented that perhaps the author of the pull request did not think of. Examples: [testing REST API](https://github.com/anitab-org/mentorship-backend/pull/535#pullrequestreview-401001287), [testing bottom navigation bug in android app](https://github.com/anitab-org/mentorship-android/pull/725#pullrequestreview-438635985).
- **Test the deployed version of the app and report bugs** found by creating issues describing them! Provide as much information as you can so that maintainers and other contributors can confirm the bug, and also for developers to have the necessary context to look for a solution for it.
- **Write tests to improve test coverage** of the project. These could be unit, integration, user interface, automation tests… Sometimes also, there could be enough code coverage, but some edge cases for a feature might not be covered in those. So be creative!
- **Reproduce bugs already reported** through issues and add more context or information to those if you think it’s missing. You can help maintainers confirm if a bug was properly reported and makes sense.
- **Write documentation about test cases** for the project. This can help new contributors learn how to use the project, and what are some use cases for it. Also can help other testers, do more testing and cover more scenarios. Example: [quality assurance test cases for mentorship-backend](https://github.com/anitab-org/mentorship-backend/blob/cf6df094e4fef735e135674e4d5697ded5060d7d/docs/quality-assurance-test-cases.md).
- **Help automate tasks on CI/CD pipeline** as enforcing coding style in code, run tests for the project, so that pipeline fails and signals to contributors and maintainers of the code changes of a pull request are up to standards.

## Resources to learn more about Quality Assurance

There are 2 resources that come to my mind with regards to learning more about Quality Assurance.

- **Test Automation University** - [https://testautomationu.applitools.com/](https://testautomationu.applitools.com/) where you can learn about Test automation specifically.
- **FreeCodeCamp** has a certification for Quality Assurance [https://www.freecodecamp.org/](https://www.freecodecamp.org/).

I would love to know more resources, so if you know more, let me know :)

## Process at AnitaB.org Open Source community 

When working on [my Google Summer of Code project](https://summerofcode.withgoogle.com/archive/2018/projects/6592097335377920/) back in 2018, I tried to come with ways for other open source contributors, to contribute to the project by testing it. I asked for help in the community for people to test the application and report bugs found by creating issues. Here's an [example of a bug reported](https://github.com/anitab-org/mentorship-backend/issues/93) where user registration was possible by sending empty values for certain required fields.

When [contributing to Open Data Kit](https://github.com/getodk/collect/pull/1986), I noticed that maintainers had a step while reviewing code, of verifying if my change was working on multiple Android versions. This inspired me to incorporate such steps in our community as well. These days at [AnitaB.org Open Source](https://github.com/anitab-org) we have this step as part of our Open Source workflow, in particular of the Pull Request lifecycle.


**Our work related to QA includes:**
- A [guide to contributing to Quality Assurance](https://github.com/anitab-org/documentation/blob/85f3fdc625a6e8d2269f3a61a43421994807c157/quality-assurance.md) in our projects;
We also have a [PR test report template](https://github.com/anitab-org/mentorship-backend/blob/cf6df094e4fef735e135674e4d5697ded5060d7d/docs/test-pr-guide.md#template-to-report-pr-testing-results) we encourage our contributors to use when testing a PR;
- Once we have 2 approvals, we label the issue with [“Status: Needs Testing”](https://github.com/anitab-org/mentorship-backend/pulls?q=is%3Apr+is%3Aopen+label%3A%22Status%3A+Needs+Testing%22) and wait for someone, other than the author, to run the PR code (or test the live app if there is a deployed version of the PR) and test what was implemented. In success, we label the issue with “Status: Ready to Merge”, in failure we re-evaluate the PR with the contributor;
- We started exploring a test management tool called [TestQuality](https://www.testquality.com/) to help us document test scenarios we already know and tested before;
- We have a dedicated channel [#quality-assurance](https://anitab-org.zulipchat.com/#narrow/stream/216325-quality-assurance) on Zulip for general discussion around QA;
- Writing automated tests, which includes UI tests and unit tests, [user journey tests](https://github.com/anitab-org/mentorship-backend/pull/708), …
- We have deployed versions of some of our projects, which allows contributors to test the app, without running the app in their development environments. We also have [apk artifacts being built through GitHub Actions](https://github.com/anitab-org/mentorship-android/pull/1004/checks) for one of our Android apps being developed.

As per our experience in the community, people who were joining us were mostly interested in contributing as a developer, but eventually got interested and helped with this type of contribution. **By learning how to test a project, you also learn how the project works.** This can be an easy path to start contributing and getting familiar with the project and its codebase.

---

A huge thank you to [Roshni Pattath](https://www.linkedin.com/in/roshni-pattath-4a356448) who has been an advocate and mentor for quality assurance within the AnitaB.org Open Source community. I’ve learned so much from her. Also for helping me review this post.

If you are interested in contributing this way, we have plenty of work you could do in our community. You can check out [GitHub](https://github.com/anitab-org) and also join our [Zulip](https://anitab-org.zulipchat.com)!
