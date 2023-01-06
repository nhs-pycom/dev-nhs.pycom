---
title:      Just a minute! pre-commit
date:       2022-05-15 15:31:19
summary:    Pre-commit is a package which works like spell-correct on your code.
slug:       just-a-minute-pre-commit
tags:       git, python
author:     Lizi Johnstone
author_bio: Data Scientist, Economics & Strategic Analysis, NHS England
author_link: https://github.com/LiziJohnstone
---

If you haven't heard of [pre-commit](https://github.com/pre-commit/pre-commit) and are using [git](https://git-scm.com/), please read.

Pre-commit is a [pip package](https://pypi.org/project/pip/) which works like spell-correct on your code. Once you have it set up, whenever you try and do a git commit, it comes along and says:

> "Woah there, you have a mistake here! Fix it first and I'll let you pass."

![Gandalf: You shall not pass!](../images/posts/shall-not-pass-min.jpg)

It even fixes some things for you; all you have to do is re-add the file and re-commit.

```bash
git add new_file.py
Git commit -m "helpful comment"

>>> Pre-commit - Failed 

Git add new_file.py
Git commit -m "helpful comment"

>>> Pre-commit - Passed
```

### Pre-commit checks:

*   [**black**](https://pypi.org/project/black/) and [**Flake8**](https://pypi.org/project/flake8/) - these are like an English teacher telling you when you have a comma in the wrong place \*
*   [**Mypy**](https://mypy.readthedocs.io/en/stable/) - lets you know if you imported a package and then never used it. Also makes sure your Typing is properly adhered to\*.
*   [**Isort**](https://pycqa.github.io/isort/) - puts your imports in alphabetical order
*   **jupyter-nb-clear-output** - checks if you remembered to delete your outputs before committing.

*\*Mypy and flake8 failures don't fix themselves, but it will tell you the line that needs fixing and why*

### Why I love and hate pre-commit:

*   It finds all my errors before my colleagues do a code review, and means I have one less thing to think about.
*   I rarely get a pass first time and fixing my typing is a pain.

**Note:** To use, you need to "pip install" it onto your server, and then "pre-commit install" the first time you're in a new your git repository \[[link](https://pre-commit.com/#install)\].