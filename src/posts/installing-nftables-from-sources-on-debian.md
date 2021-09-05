---
title: Installing nftables from sources on Debian
date: '2018-03-09'
tags:
  - tech
crossposts:
  devto: https://dev.to/isabelcmdcosta/installing-nftables-from-sources-ondebian--4ic
  medium: https://isabelcmdcosta.medium.com/installing-nftables-from-sources-on-debian-eb8c24bbc5ca
---


In this post, I’ll show you how I installed _nftables_ from sources. I needed to do this from the sources to have the latest version of _nftables_.

I needed to work with [iptables](https://www.netfilter.org/projects/iptables/index.html) to perform stateless Network Address Translation (NAT) but then I discovered that didn’t appear to be possible by using _iptables_. So I found [nftables](https://netfilter.org/projects/nftables/), which allows me to do it.

To have the latest version of _nftables_, at least above v0.7, I installed this tool from the sources. I started by following the instructions on [the nftables’ wiki page with the installation instructions](https://wiki.nftables.org/wiki-nftables/index.php/Building_and_installing_nftables_from_sources).

The _nftables_ package dependencies are listed [here](https://packages.debian.org/source/stable/nftables). These are the main ones:

- [libmnl](https://www.netfilter.org/projects/libmnl/) — the minimalistic Netlink library
- [libnftnl](https://www.netfilter.org/projects/libnftnl/) — low level netlink userspace library

First, I tried to install _libmnl_ package provided by on Debian, with `aptitude search libmnl`, and then I installed `libmnl-dev`, but it didn’t work for me later, so I installed this from the sources after installing `libnftnl`.

---

To install _libnftnl_ userspace library, the _nftables_ wiki page suggests these commands:

```
# git clone git://git.netfilter.org/libnftnl
# cd libnftnl
# sh autogen.sh
# ./configure
# make
# make install
```

While running the commands, I get the first error (in the third command):

```
root@debian:/home/debian/libnftnl# sh autogen.sh 
autogen.sh: 3: autogen.sh: autoreconf: not found
```

Then I installed the missing packages: _autogen_, _autoreconf_.

```
# aptitude install autoconf autogen
```

Next, I tried again the `sh autogen.sh` step and got the following error:

```
root@debian:/home/debian/libnftnl# sh autogen.sh 
configure.ac:28: error: possibly undefined macro: AC_DISABLE_STATIC
      If this token and others are legitimate, please use m4_pattern_allow.
      See the Autoconf documentation.
autoreconf: /usr/bin/autoconf failed with exit status: 1
```

After some research, I found that I had to install _libtool_ package, with `aptitude install libtool`.


Then I tried again, and  got this output:

```
root@debian:/home/debian/libnftnl# sh autogen.sh 
libtoolize: putting auxiliary files in AC_CONFIG_AUX_DIR, `build-aux'.
libtoolize: copying file `build-aux/ltmain.sh'
libtoolize: putting macros in AC_CONFIG_MACRO_DIR, `m4'.
libtoolize: copying file `m4/libtool.m4'
libtoolize: copying file `m4/ltoptions.m4'
libtoolize: copying file `m4/ltsugar.m4'
libtoolize: copying file `m4/ltversion.m4'
libtoolize: copying file `m4/lt~obsolete.m4'
configure.ac:8: installing 'build-aux/ar-lib'
configure.ac:8: installing 'build-aux/compile'
configure.ac:5: installing 'build-aux/config.guess'
configure.ac:5: installing 'build-aux/config.sub'
configure.ac:10: installing 'build-aux/install-sh'
configure.ac:10: installing 'build-aux/missing'
examples/Makefile.am: installing 'build-aux/depcomp'
```

Finally `autogen.sh` script is working! In this point, I could move forward to the next command: `./configure`. Here’s the output I had:

```
root@debian:/home/debian/libnftnl# ./configure
checking build system type... x86_64-unknown-linux-gnu
checking host system type... x86_64-unknown-linux-gnu
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables... 
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether gcc accepts -g... yes
checking for gcc option to accept ISO C89... none needed
checking whether gcc understands -c and -o together... yes
checking for ar... ar
checking the archiver (ar) interface... ar
checking for a BSD-compatible install... /usr/bin/install -c
checking whether build environment is sane... yes
checking for a thread-safe mkdir -p... /bin/mkdir -p
checking for gawk... gawk
checking whether make sets $(MAKE)... yes
checking for style of include used by make... GNU
checking whether make supports nested variables... yes
checking how to create a pax tar archive... gnutar
checking dependency style of gcc... gcc3
checking whether make supports nested variables... (cached) yes
./configure: line 4135: syntax error near unexpected token `LIBMNL,'
./configure: line 4135: `PKG_CHECK_MODULES(LIBMNL, libmnl >= 1.0.0)'
```

From this output, I noticed that I was missing the _libmnl_ package, which I installed later, as shown next.

---

To install _libmnl_ userspace library, correctly from the sources, I ran these commands:

```
# git clone git://git.netfilter.org/libmnl
# cd libmnl
# sh autogen.sh
# ./configure
# make
# make install
```

With the previous packages I installed, these steps had no errors.

---

Now going back to the installation of _libnftnl_, I tried to run `./configure` again and I still got the same problem. I fixed the problem following the instructions of [this blog post](http://blog.anarey.info/2014/08/pkg_check_moduleslibmnl-libmnl-1-0-0-error/). Here are the steps I followed:

```
root@debian:/home/debian/libnftnl# whereis libmnl
libmnl: /usr/local/lib/libmnl.so /usr/local/lib/libmnl.la /usr/include/libmnl
```

Then I did:

```
root@debian:/home/debian/libnftnl# ldd /usr/local/lib/libmnl.so
 linux-vdso.so.1 (0x00007ffe5212a000)
 libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007efc29faf000)
 /lib64/ld-linux-x86-64.so.2 (0x000056203c383000)
```

The post also suggested that I installed _pkg-config_ with `aptitude install pkg-config` and install _gmp_ package with `aptitude install libgmp3-dev`. Here's a post that shows [how to install in other Linux distributions here](http://www.mathemagix.org/www/mmdoc/doc/html/external/gmp.en.html).

Also, the above post suggested that I should configure the pkg-config environment path:

```
# PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
# export PKG_CONFIG_PATH
```

Then I ran `sh autogen.sh` and `./configure` again. After this I got a much nicer and longer output, like this:

```
root@debian:/home/debian/libnftnl# ./configure
checking build system type... x86_64-unknown-linux-gnu
checking host system type... x86_64-unknown-linux-gnu
checking for gcc... gcc
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables... 
checking whether we are cross compiling... no
(...)
checking for LIBMNL... yes
(...)
config.status: creating tests/Makefile
config.status: creating libnftnl.pc
config.status: creating doxygen.cfg
config.status: creating config.h
config.status: executing depfiles commands
config.status: executing libtool commands
libnftnl configuration:
  JSON support:    no
```

After this step I finally ran the last two commands  —  `make` and `make install`  — 
without any errors.

---

Now that _libmnl_ and _libnftnl_ were successfully installed, I tried to install userspace _nft_ command line utility, _nftables_ from the sources, with the following commands:

```
# git clone git://git.netfilter.org/nftables
# cd nftables
# sh autogen.sh
# ./configure
```

While running the last command, `./configure`, I got an error indicating that I was missing _bison_ package, which the _nftables_ depended on:

```
root@debian:/home/debian/nftables# ./configure
checking build system type... x86_64-unknown-linux-gnu
checking host system type... x86_64-unknown-linux-gnu
(...)
checking for flex... no
checking for lex... no
checking for bison... no
checking for byacc... no
*** Error: No suitable bison/yacc found. ***
    Please install the 'bison' package.
```

Later I got the same message for _flex_ and _docbook2x_ packages. [Note that both of this are in the _nftables_ dependencies list](https://packages.debian.org/source/stable/nftables). So to fix these error messages I installed these packages  —  bison, flex, and docbook2x  —  with `aptitude install <package>` (e.g.: `aptitude install flex`).

After this, I got this error message: `configure: error: No suitable version of libreadline found`. To fix this I followed the [steps of this post](https://www.howtoinstall.co/en/debian/jessie/libreadline-dev).

```
# aptitude update
# aptitude install libreadline-dev
```

At this point, I had enough installed to have _nft_ tool running. This is the installation output with no errors:

```
root@debian:/home/debian/nftables# ./configure
checking build system type... x86_64-unknown-linux-gnu
checking host system type... x86_64-unknown-linux-gnu
(...)
config.status: creating include/linux/netfilter_ipv4/Makefile
config.status: creating include/linux/netfilter_ipv6/Makefile
config.status: creating doc/Makefile
config.status: creating files/Makefile
config.status: creating files/nftables/Makefile
config.status: creating config.h
config.status: executing depfiles commands
config.status: executing libtool commands
nft configuration:
  cli support:                 yes
  enable debugging symbols:    yes
  use mini-gmp:                no
  enable man page:             yes
  enable pdf documentation:    no
  libxtables support:          no
```

Then I ran `make` and `make install`, also with no errors.

---

Finally, I checked if _nftables_ was successfully installed:

```
root@debian:/home/debian/nftables# nft
nft: no command specified
root@debian:/home/debian/nftables# nft -v
nftables v0.8.2 (Joe Btfsplk)
```

And it was! It worked!

## Summary

After all of this procedure, I had to install this on another virtual machine. In this time I tried a simpler approach, with this order:

- First I ran aptitude update to download lists of new and upgradable packages. 
- Then I installed all the packages I needed during the first installation, with aptitude install <package-name>. These include _autoconf_, _autogen_, _libtool_, _pkg-config_, _libgmp3-dev_, _bison_, _flex_, _docbook2x_ and _libreadline-dev_. You can check the dependencies of _nftables_ [here](https://packages.debian.org/source/stable/nftables).
- Next, I configured the path for pkg-config with the following lines:

```
# PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
# export PKG_CONFIG_PATH
```

- Then I installed the [_libmnl_](https://www.netfilter.org/projects/libmnl/) library, with the commands previously presented:

```
# git clone git://git.netfilter.org/libmnl
# cd libmnl
# sh autogen.sh
# ./configure
# make
# make install
```

- After that I installed the [_libnftnl_](https://www.netfilter.org/projects/libnftnl/) library, with these commands, also shown previously:

```
# git clone git://git.netfilter.org/libnftnl
# cd libnftnl
# sh autogen.sh
# ./configure
# make
# make install
```

- Lastly, I installed [_nftables_](https://www.netfilter.org/projects/nftables/) this way:

```
# git clone git://git.netfilter.org/nftables
# cd nftables
# sh autogen.sh
# ./configure
# make
# make install
```

- Next, to check if _nftables_ is working, I checked the version with `nft -v`. Surprisingly I got an error I haven’t seen before, that I fixed with `ldconfig` command. If you’re unfamiliar with `ldconfig` you can learn more about it [here](https://linux.die.net/man/8/ldconfig). You can check the sequence of the commands below:

```
root@debian:/home/debian# nft -v
nft: error while loading shared libraries: libnftnl.so.7: cannot open shared object file: No such file or directory
root@debian:/home/debian# ldconfig
root@debian:/home/debian# nft -v
nftables v0.8.2 (Joe Btfsplk)
```
