---
layout: post
title: "Manwhich"  
date:   2017-06-07 17:15:50
render: normal
abstract: There's a powerful little program you might have overlooked. You can use it to copy files, write a book, send email, or browse the internet. Let's learn how to use it.
series: shell
language: en
---
We're going to begin a manner that's a tad unorthodox. Most shell tutorials
start off with familiar commands such as `cd` or `ls`. We'll cover those here
too, but let's begin with a less immediately useful, but incredibly important
command: `which`.

## Which
`Which` has a pretty simple purpose. It will tell you whether or not a program
is installed. Which is the *safe* way to check whether a command is available 
within your shell. Let's tackle an example. Suppose you've fallen in love with
using the shell, as you might in due time, and run into a little tutorial about
using the `rm` command. It's not uncommon, and we certainly can't fault the
author for it, for the writer's of such tutorials to assume a certain level of
knowledge on the part of their reader. This shell wizard has provided a somewhat
devious suggestion, recommending you run the following `rm -rf <directory>` So
you decide to do so--suddenly you've gone and permanently deleted everything in
your Documents folder. Whoops. 

That's where `which` comes to the rescue. `Which` will safely check whether a
given command is available on your system without actually *running* that
command and introducing all kinds of regrettable side effects. Using which is
straightforward: type `which` followed by the name of the command you'd like to
check. For example:
```sh
which rm 
# /bin/rm
which cd 
# /usr/bin/cd
which ls
# /bin/ls 
``` 

Far more sensible. We no longer have to worry about doing god knows what just to
see if we actually have a command installed. Still, while which can tell us
whether a command exists, it doesn't give us any hints as to what will happen
when we actually do decide to give that command a whirl. That's where `man`
picks up the slack.

## Man
`Man` is not, in fact, meant to emulate a somewhat disgruntled expression of
frustration with the shell. It is short for *manual*. You can probably guess
what it does. Given a command, if a manual page exists for that command, `man`
will open the manual page for your browsing pleasure. Manual pages commonly
follow a common structure. Most importantly, they'll often provide a basic
synopsis of what a command does, as well as its basic usage. For now, it is best
to illustrate by an example:
```sh
man ls
#NAME
#     ls -- list directory contents
#
#SYNOPSIS
#     ls [-ABCFGHLOPRSTUW@abcdefghiklmnopqrstuwx1] [file ...]
#
#DESCRIPTION
#     For each operand that names a file of a type other than directory, ls
#     displays its name as well as any requested, associated information.  For
#     each operand that names a file of type directory, ls displays the names
#     of files contained within that directory, as well as any requested, asso-
#     ciated information.
#
```
Great. Now we have a handle on what `ls` can accomplish. When you run `man`, the
manual page will open in a *terminal pager*, essentially a document viewer,
usually the program `more` or `less` (why not use `man` to see what those do?
Better yet, use `which` to see if they are installed), [Add note on more/less
man pages only going to less on my system--why might this be the case] and
contains much more information than the brief  snippet excerpted in the prior
example. `Man` and `which` make a fine combo: when you encounter a new command,
you can first use `which` to check whether the command or program is available
on your system, then run `man` to determine its consequences. This is a lot
safer than blindly running `rm -rf` and deleting precious files, no? 

As you dig deeper into the world of the shell and its plethora of commands,
you'll find it's frequently helpful to use `man` to discover more detailed
information about a particular command, or simply to refresh you memory.

## pwd, ls, and cd 
Now that we're acquainted with man and which, let's cover one of the shell's
fundamental concepts: directories. Doubtless, you're already familiar with
directories to some extent--probably through a GUI. You can access those same
folders and their contents using the shell, and once you get the hang of it,
you'll find that it's decidedly faster than clicking about with a mouse. 

Like man and which, we'll begin with a command that doesn't *do* much of
anything, but provides us with some crucial information. The `pwd` command will
output the path, or directory, your current shell is pointing to. Unless you
explicitly specify otherwise, the majority of commands and programs will execute
within or against your current working directory by default. Much like man and
which, `pwd` helps
ensure you don't run anything unwittingly. It's important to know what you're
doing.

Our current working directory alone, while a useful nugget of information,
leaves us wanting more. It's doubtless reasonable for us to want to know what
files a directory contains, seeing as their god-given purpose is to store other
directories and files. The limber and lightweight `ls` comes to the rescue.
Like pwd, man, and which, ls is an informative tool, and doesn't manipulate the
contents of your system. During our first foray into the shell, this gentle
demeanor is quite the benefit. Running ls will print a list of the contents of
your current directory.
```sh

``` 


