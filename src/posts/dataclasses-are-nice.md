---
title: Dataclasses in Python are nice!
date: '2021-03-13'
featured: true
tags:
  - tech
  - python
crossposts:
  devto: https://dev.to/isabelcmdcosta/dataclasses-in-python-are-nice-1fff
  codenewbie: https://community.codenewbie.org/isabelcmdcosta/dataclasses-in-python-are-nice-3e3l
---

Couple weeks ago I learned about [`dataclasses`](https://docs.python.org/3/library/dataclasses.html) feature in Python. This feature is a nice way to define classes in python. This was introduced in [Python 3.7](https://docs.python.org/3.7/whatsnew/3.7.html), in particular [PEP 557](https://www.python.org/dev/peps/pep-0557/). To use this feature make sure you are running python version 3.7 or above.

Previously, I knew about defining new classes in python using the `self.__init__()` function. Here's an example of me defining a class `Youtuber`.

```python
class Youtuber:
    def __init__(self, name: str, categories: list[str]):
        self.name = name
        self.categories = categories
```

Now we can use less boilerplate code to define classes. There is no need to install a separate python library, this will come with python standard library (as long as it is > 3.7).

Here's how you can define these now:
```python
from dataclasses import dataclass
 
@dataclass
class Youtuber:
   """Class for defining youtubers."""
   name: str
   categories: list[str]
```

In this example above, I am importing it first `from dataclasses import dataclass` and then defining it. I created a class definition and used `@dataclass` annotation to tell python how it should interpret this class definition.

Then I can create this in python, as I would do it anyway, regardless of using `@dataclass`:
```python
Youtuber("Chris Stuckmann", ["movie-reviews"])
```

Here's how you can try this out, using 3 of my favorite youtube channels :)
```python
youtubers = []
youtubers.append(Youtuber("Chris Stuckmann", ["movie-reviews"]))
youtubers.append(Youtuber("Double Toasted", ["movie-reviews"]))
youtubers.append(Youtuber("The Fitness Marshall", ["fitness"]))

for youtuber in youtubers:
    print(f"{youtuber.name}'s categories are: {youtuber.categories}")
```

Let's put this all together in a file called `youtubers.py` and run it! You can copy it from this [GitHub gist I created](https://gist.github.com/isabelcosta/c14c4c9a4a098a17807e5bda2df92ac3). You should get this output:
```
$ python youtubers.py  
Chris Stuckmann's categories are: ['movie-reviews']
Double Toasted's categories are: ['movie-reviews']
The Fitness Marshall's categories are: ['fitness']
```
