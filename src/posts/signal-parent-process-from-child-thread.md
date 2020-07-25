---
title: Signal parent process from child thread using C
date: '2018-03-26'
tags:
  - tech
---

For my master's thesis I had to use signals with C language.

In my code, I used `SIGUSR1` as the signal I wait for and the `handle_my_custom_signal` function which will execute once this signal is received in the parent process.

This piece of code allows you to put your program listening for a signal.
```
signal(SIGUSR1, handle_my_custom_signal);
```

This is how I trigger the signal:
```
raise(SIGUSR1);
```

`SIGINT` is used by _Ctrl+C_. So if you for this signal, your function will be triggered, when you do _Ctrl+C_.

There are two signals that can be used as we want, without having to waste the `SIGINT` that is used by _Ctrl+C_, such as `SIGUSR1` and `SIGUSR2`. In [this post](https://www.gnu.org/software/libc/manual/html_node/Miscellaneous-Signals.html#Miscellaneous-Signals) you can see these and other miscellaneous signals.

[This GitHub Gist](https://gist.github.com/isabelcosta/597ef4cc585d44879e6084dec00d166b) has the main code of an experiment I did to try this out. You can see the full repository, which contains the `Makefile` for this: [isabelcosta/testing-signals-with-c](https://github.com/isabelcosta/testing-signals-with-c).

<script src="https://gist.github.com/isabelcosta/597ef4cc585d44879e6084dec00d166b.js"></script>

I actually used this on [my Master project](https://github.com/inesc-id/Premium), more specifically [this line here](https://github.com/inesc-id/Premium/blob/71bcf823853869f36ff27b6c1144375e3415c0a4/MACHETE/SCMultipath/sending_handler.c#L394).
