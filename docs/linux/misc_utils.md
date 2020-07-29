---
layout: default
title: Misc Utilities
parent: Linux & Bash Scripting
nav_order: 98
---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>


## History
- See history with `history` command
- You will get a number for each `history` item.  
- You can replay any number `n` with command `!n`
- History on OS X is stored in `~/.zsh_history`

 `!n` refer to command number n in `history` when you call history


## Diff
You can difff two files, you usually want to see a unified diff b/c that is easier to read

`diff -u file1.txt file2.txt`

![](Linux%20Command%20Line%202E/C4B6DEB2-880A-430B-95B8-1CFBF41DB54C.png)

## Here Documents

Instead of using echo, our script now uses cat and a here document. The string _EOF_ (meaning end of file, a common convention) was selected as the token and marks the end of the embedded text. Note that the token must appear alone and that there must not be trailing spaces on the line.


![](Linux%20Command%20Line%202E/53AC11BD-C482-4F2D-AEB7-A8698ACEEA8D.png)

Unlike Echo, all double quotes and single quotes are escaped.  Here is an example of the same thing at the command line.

```bash
[me@linuxbox ~]$ foo="some text"
[me@linuxbox ~]$ cat << _EOF_
> $foo
> "$foo"
> '$foo'
> \$foo
> _EOF_ 
some text 
"some text" 
'some text' 
$foo
```


# Named Pipes with `mkfifo`
Named pipes are input/output buffers.  You can fill up the buffer and then drain the buffer later.  

1. Setup Named Pipe using `mkfifo`
![](Linux%20Command%20Line%202E/6F44893E-0742-4847-8636-3C1953464CCC.png)

2. Fill up the named pipe, this will hang until the pipe is drained

Hamel: you can run this part in a sub shell

![](Linux%20Command%20Line%202E/FBBAFA3E-0BC9-4E2A-BCEE-199EB618AECC.png)


3. In a NEW terminal window drain the pipe

![](Linux%20Command%20Line%202E/A604E250-38ED-4E42-8C3E-22DAB9F6019D.png)


Hamel: put it all together in a script.  You can drain the pipe as many times as you want.

```bash
#!/bin/bash

mkfifo pipe1
ls -l > pipe1 &
cat < pipe1
```

