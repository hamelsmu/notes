---
layout: default
title: programming languages
nav_order: 6
has_children: true
---

High level takeaways after completing the [3-Part Coursera class Programming Languages](https://www.coursera.org/learn/programming-languages) with Dan Grossman.

Your GitHub repo for this class (private) [is here](https://github.com/hamelsmu/programming-languages-class).

## SML (Standard ML) Part A

- You setup vim to have an IDE for this.  See these [notes](vim.md).
- ML is a statically typed language with magical **type inference** that works really well.  It automatically determines the types and is very intuitive and helpful.
- Learned how to use recursion everywhere instead of loops, particularly with `hd`, `tl` and `cons`.
- Local variable binding with `let` is very important (which also allows you to bind local/private functions as well)
- `cons` allows you to append to the beginning of a list
- There is an option type that is `NONE` or `SOME v`
- This language doesn't encourage mutation, which is a feature.  Otherwise, you can use a reference which is like a pointer to mutate a variable.
- **pattern matching with a case expression**  `case name (first, last) =>`
    - You can have nested patterns
    - You can pattern match against function arguments which allow for really nice syntax for achieving multiple dispatch type of functionality..
- **Tail recursion** with accumulators.  Ex- factorial
- The `fn` keyword is used to define **anonymous functions**.
- ML uses `lexical scope` which means function is evaluated in the environment where the function was defined. `dynamic scope`, which is usually not desired, is the alternative where the function is evaluated in the in the environment it is called.
- **Closure** - the call stack has a "pair" that is the (function, environment when the function was defined).  This pair is called the `closure`.  The call stack has a snapshot of what the environment looked like at the time the function was defined. 
- `fold` is like reduce.
- ML supports **function composition** like this with  the keyword `o`:  `f1 o f2 o f3`
    - best to do a val binding to avoid unnecessary wrapping: `val newfunc = f1 o f2`
    - with `o` you apply functions from right to left so `f1 o f2 x` is the same as `f1(f2(x))` there is an alternative that is left to right called the `pipeline operator`.
- **Currying and partial application**
    - Universal way to make a func curryable:
        ```ml
        fun myfunc x
            let fun f2 (z) = z
                fun f1 (y) = f2(y)
            begin
                f1
            end
        ```
    - ML has first class support for currying so you don't have to do the above hack. 
- ML supports mutual recursion just like `let-rec` in racket.


## Racket (Part B)