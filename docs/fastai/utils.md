---
layout: default
title: fastcore.utils
parent: fastai
nav_order: 2
---

# Things I Learned From fastcore.utils

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Important Reading Materials
Real Python [Metaclasses blog post](https://realpython.com/python-metaclasses/)

### Defining classes with type

You can use `type` to also define classes.  This can be useful when you want to programmatically define classes, and is new to python 3. 

```py
Foo = type(
    'Foo',
    (),
    {
        'attr': 100,
        'attr_val': lambda x : x.attr
    }
)

>>> x = Foo()
>>> x.attr
100
>>> x.attr_val()
100

```


This is used in `fastcore.utils.get_class` http://fastcore.fast.ai/utils.html#get_class.  


### Avoid boilerplate when defining new classes w/ `store_attr`
Use `fast core.utils.store_attr`: http://fastcore.fast.ai/utils.html#get_class

The old way

```py
class T:
    def __init__(self, a,b,c): 
		self.a = a
      self.b = b
      self.c = c
```

The new way

```py
class T:
    def __init__(self, a,b,c): store_attr(self, 'a,b,c')
```


### Utilities I'm likely to use in other projects

Suggest going through http://fastcore.fast.ai/utils.html and taking a look.  The below utilities are well documented, but this is a quick list of things I especially liked.  You can accomplish the same things without these utilities, but these utilities involve writing less code.

- `mk_class`: quickly add a bunch of attributes to a class
- `wrap_class`: add new methods to an a class with a simple decorator
- `store_attr`:  already discussed above. 
- `groupby`: similar to scala groupby
- `merge`: merge dicts
- `fasttuple`: a tuple on steroids
- `Infinite Lists`: useful for padding and testing
- `chunked`: for batching and organizing stuff
- `Pathlib.Path Extensions`:  A better Pathlib.Path.  http://fastcore.fast.ai/utils.html#Extensions-to-Pathlib.Path 

#### Multiprocessing

Extends python's multiprocessing http://fastcore.fast.ai/utils.html#Multiprocessing.  Has features like:

- progress bars
- better default behavior
- ability to pause to mitigate race conditions with external services: http://fastcore.fast.ai/utils.html#parallel
- `parallel_chunks`: processing things in batches on each worker, ex: if you have a vectorized operation to perform in chunks
- 

#### Functions on Functions

This is a functional programming toolkit that is my favorite part of this library.  

http://fastcore.fast.ai/utils.html#Functions-on-Functions

- `compose`:  functional programming - compose several functions
- `maps`:  a map that also composes functions
- `partialler`: partial that copies the docstring
- `mapped`: A more robust `map` 
- `using_attr`:  change the way a function uses its inputs (see docs)
- `Self`:  with an uppercase `S` - a better lambda

## Other

### Class Decorators
I did not know you could have decorators on classes.  I though it was only for functions.  Learned this from  Real Python [Metaclasses blog post](https://realpython.com/python-metaclasses/).

```py
def decorator(cls):
    class NewClass(cls):
        attr = 100
    return NewClass

@decorator
class X:
    pass

@decorator
class Y:
    pass

@decorator
class Z:
    pass

>>> X.attr
100
>>> Y.attr
100
>>> Z.attr
100

```
