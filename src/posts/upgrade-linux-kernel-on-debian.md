---
title: How to upgrade Linux kernel on Debian
date: '2018-02-25'
tags:
  - tech
---

In this post, I'll show how I updated the virtual machines I worked with. I mostly followed the steps in this great blog post on [how to update the kernel in Debian](https://itsfoss.com/kernel-upgrade-debian/). This post is a short version of that. 

I followed the steps in root mode, that's why you won't see `sudo` here. If you enter in root mode with `sudo` then add it to the commands.

First, check your Linux kernel version:
```
# uname -r
3.16.0-4-amd64
```

Then do a search on the available versions of `linux-image` and `linux-headers`, like this:

```
# aptitude search linux-image
v   linux-image               -                                    
v   linux-image-2.6           -                                    
i A linux-image-3.16.0-4-amd6 - Linux 3.16 for 64-bit PCs          
p   linux-image-3.16.0-4-amd6 - Debugging symbols for Linux 3.16.0-
p   linux-image-3.16.0-5-amd6 - Linux 3.16 for 64-bit PCs          
p   linux-image-3.16.0-5-amd6 - Debugging symbols for Linux 3.16.0-
p   linux-image-4.1.38.mptcp  - Linux kernel, version 4.1.38.mptcp 
i A linux-image-4.4.70.mptcp  - Linux kernel, version 4.4.70.mptcp 
p   linux-image-4.4.83.mptcp  - Linux kernel, version 4.4.83.mptcp 
p   linux-image-4.4.83.mptcp- - Linux kernel debugging symbols for 
p   linux-image-4.4.88.mptcp  - Linux kernel, version 4.4.88.mptcp 
p   linux-image-4.9.60.mptcp  - Linux kernel, version 4.9.60.mptcp 
p   linux-image-4.9.78.mptcp  - Linux kernel, version 4.9.78.mptcp 
i   linux-image-amd64         - Linux for 64-bit PCs (meta-package)
p   linux-image-amd64-dbg     - Debugging symbols for Linux amd64 c
```

Now to search the headers, do:
```
# aptitude search linux-headers
v   linux-headers             -                                    
v   linux-headers-2.6         -                                    
p   linux-headers-3.16.0-4-al - All header files for Linux 3.16 (me
p   linux-headers-3.16.0-4-al - All header files for Linux 3.16 (me
i   linux-headers-3.16.0-4-am - Header files for Linux 3.16.0-4-amd
i A linux-headers-3.16.0-4-co - Common header files for Linux 3.16.
p   linux-headers-3.16.0-5-al - All header files for Linux 3.16 (me
p   linux-headers-3.16.0-5-al - All header files for Linux 3.16 (me
p   linux-headers-3.16.0-5-am - Header files for Linux 3.16.0-5-amd
p   linux-headers-3.16.0-5-co - Common header files for Linux 3.16.
p   linux-headers-4.1.38.mptc - Linux kernel headers for 4.1.38.mpt
i A linux-headers-4.4.70.mptc - Linux kernel headers for 4.4.70.mpt
p   linux-headers-4.4.83.mptc - Linux kernel headers for 4.4.83.mpt
p   linux-headers-4.4.88.mptc - Linux kernel headers for 4.4.88.mpt
p   linux-headers-4.9.60.mptc - Linux kernel headers for 4.9.60.mpt
i   linux-headers-4.9.78.mptc - Linux kernel headers for 4.9.78.mpt
p   linux-headers-amd64       - Header files for Linux amd64 config
```

I shortened the output just to give an idea of the output. Now with this output, you can see the package name for the `linux-image` and `linux-headers`. In my case, I want to install the version 4.9.78.mptcp, so I will install like this:

```
# aptitude install linux-image-4.9.78.mptcp linux-headers-4.9.78.mptcp
```

After this I restarted the machine, and checked the kernel release with the first command of the post:

```
# uname -r
4.9.78.mptcp
```

Yey, a new version of the kernel is installed.

So if this does not work for you, I found [this post very helpful](https://itsfoss.com/kernel-upgrade-debian/).
