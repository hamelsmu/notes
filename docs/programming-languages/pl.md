---
title: programming languages
sidebar_position: 6
---

High level takeaways after completing the [3-Part Coursera class Programming Languages](https://www.coursera.org/learn/programming-languages) with Dan Grossman.

Your GitHub repo for this class (private) [is here](https://github.com/hamelsmu/programming-languages-class).

## SML (Standard ML) Part A

- You setup vim to have an IDE for this.  See notes in the VIM section below.
- ML is a statically typed language with magical **type inference** that works really well.  It automatically determines the types and is very intuitive and helpful.
- Learned how to use recursion everywhere instead of loops, particularly with `hd`, `tl` and `cons`.
- Local variable binding with `let` is very important (which also allows you to bind local/private functions as well)
- `cons` allows you to append to the beginning of a list
- There is an option type that is `NONE` or `SOME v`
- This language doesn't encourage mutation, which is a feature.  Otherwise, you can use a reference which is like a pointer to mutate a variable.
- **pattern matching with a case expression**:  This is one of the coolest things that I learned, and something similar [is coming to Python v 3.10](https://www.python.org/dev/peps/pep-0636/).
    - You can have nested patterns
    - You can pattern match against function arguments which allow for really nice syntax for achieving multiple dispatch type of functionality.. (not sure about python)
    - You can pattern match against types as well as data structures.
    - You can have constants in there as well.
    ```ml
    case name 
         NameType name => ...
       | (first, "MyLastName") => ...
       | (first, last) => ...
       | name => ...
       | _ => ...
    ```

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

Racket is related to Lisp and Scheme. Everything is a function.  Parenthesis for everything. The position of parenthesis changes the meaning of the code.

- Racket has dynamic typing, unlike SML. 
- Thunks: Wrap a function in a zero argument function to delay evaluation. Applications:
	- Streams: the function will return a tuple of (value, func), and when you call func it will return (value, func) so you get one value at a time. This is not specific to Racket.
	- Lazy evaluation:  You can use thunks to delay execution like a promise to a later time.  This is an example of lazy evalution that doesn't actually evaluate anything until being forced to: 

```racket
(define (my-delay f) (mcons #f f))

(define (my-force th)

(if (mcar th) (mcdr th) (begin (set-mcar! th #t) (set-mcdr! th ((mcdr th))) (mcdr th))))
```

Racket allows you use **macros** that will evaluate before the code is run and that will "expand" into valid racket syntax.  

You implemented your own small programming language.  This used recursive calls to evluate expressions with the base case being the values (Integer, strings, etc).
	- Interperter: write a program in another language A that takes programs in B and produces answers directly. A better term would be "evaluator".
	- Compiler: write program in another language A that takes programs in B and produces an equivalent program in langauage C.  A better term here would be "translator".

Closures: for lexical scope, the interpreter has a stack of tuples.  The tuples are (1) the function to be called (2) the environment, which contains the value of all variables at the time the function was defined.  You also have to track the arguments for the function seperately, so you can evaluate the arguments in the environment the function was run in. 



## Ruby (Part C)

I didn't spend too much time some concepts I was mostly familiar with this.  

- Ruby is OOP, dynamically typed. 
- Ruby is pure OOP, even top level functions and variables are part of the built-in `Object` class.

- They have fastcore like shortcuts for getters and setters:

```ruby
attr_reader :y, :z # defines getters 
attr_accessor :x # defines getters and setters
```

newlines are important.  The syntax can change without them.

Dynamic class definitions.  The following code will result in `Class` with the methods `foo` and `bar`!  The second one doesn't override the first one!

```rb
class Class
    def foo
        ...
    end
end

class Class
    def bar
        ...
    end
end
```


### Blocks

They also have a very convenient lambda like thing called `Blocks`:

```ruby
sum = 0 
[4,6,8].each { |x| sum += x 
               puts sum }
```

You can use Blocks to make accumulators too, and even use `inject` to initialize the accumulator:

```ruby
sum = [4,6,8].inject(0) { |acc,elt| acc + elt }
```

To use blocks in a method, you will have to look that up in the docs. This involves the `yield` keyword.  For example, this code will print "hi" 3 times:

```ruby
def foo x 
  if x 
    yield 
   else 
    yield 
    yield 
   end 
end 

foo (true) { puts "hi" } 
foo (false) { puts "hi" }
```

`Blocks` are not first class functions even though they kind of look like lambdas.  Lets say you wanted to map over an array but wanted to return an array of functions instead of values.  The way to do this is to use the keyword `lambda`:

```ruby
c = a.map {|x| {|y| x >= y} } # wrong, a syntax error

c = a.map {|x| lambda {|y| x >= y} } # this will work
```

#### Subclassing

- `super` calls the same method in the parent class.  You dont have to do super.method_name(), just `super`. 
- Instance variables are preceeded with `@`

Child classes are defined like this:

```ruby
class Child < Parent
 ...
end
```

### Typing

They discussed the various ways different type systems are constructed.  The interface idiom, that is familar to you from Golang (but not specific to Golang) was introduced.

---

## VIM 
For the Standard ML programming language I decided to force myself to use vim.  I added the following things to my `.vimrc` to make it manageable.  Note the plugin `jez/vim-better-sml`

```
" from https://github.com/jez/vim-as-an-ide
set nocompatible

inoremap <C-e> <C-o>A


filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" ----- Making Vim look good ------------------------------------------
Plugin 'altercation/vim-colors-solarized'
Plugin 'tomasr/molokai'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

" ----- Vim as a programmer's text editor -----------------------------
Plugin 'scrooloose/nerdtree'
Plugin 'jistr/vim-nerdtree-tabs'
Plugin 'vim-syntastic/syntastic'
Plugin 'xolox/vim-misc'
Plugin 'xolox/vim-easytags'
Plugin 'majutsushi/tagbar'
Plugin 'ctrlpvim/ctrlp.vim'
" ----- Working with Git ----------------------------------------------
Plugin 'airblade/vim-gitgutter'
Plugin 'tpope/vim-fugitive'
Plugin 'Raimondi/delimitMate'
Plugin 'jez/vim-better-sml'
Plugin 'christoomey/vim-tmux-navigator'
Plugin 'benmills/vimux'
call vundle#end()

filetype plugin indent on

set number
set ruler
set showcmd
set incsearch
set hlsearch
set backspace=indent,eol,start

syntax on
set mouse=a
```
