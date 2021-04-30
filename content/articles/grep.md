---
title: Grep
description: Grep is a utility or function used to search for text patterns in files
categories:
 - command-line
 - linux
author:
  name: Chris
---

Grep is a utility or function used to search for text patterns in files.

For example if you have a file with a million records of items in a shop,
you could search that list for a certain item.

```bash
[open list] | grep "Noodles"
```

The above script will search the list of items for all of the ones which have "Noodles" in them, 
and output only the lines which match.

Grep is not limited to only searching files. 
It could search any text or input.

For example if a program is meant to calculate your age from your birth date and it spits out something like this
```bash
[run-program]
Name: John
Surname: Doe
Age: 18
``` 

If you wanted to get the specific line which states the age of the person you could use grep to find it
```bash
[run-program] | grep Age
Age: 18
```

This is often useful when programs output many many lines of jargon, 
and you want to find only certain lines which match a pattern, in this case "Age"

## Flexing 

Grep can do much more than just find patterns

It can:
* Calculate how many lines match your pattern
* Find files which have a match
* Calculate how many files match a pattern
* Exclude your pattern (Show only lines which *don't* match)
* Read whole folders of files for matches

It can tell you how many lines match a pattern
