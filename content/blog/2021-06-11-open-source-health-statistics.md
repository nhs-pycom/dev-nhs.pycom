---
title:      Open-Source Health Statistics
date:       2021-06-11 12:00:00
summary:    We are collecting statistics on open-source NHS and healthcare related code repositories.
slug:       open-source-health-statistics
tags:       open-source, GitHub, analytics, python
author:     Craig Robert Shenton, PhD
author_bio: Senior Data Engineer, NHS England Medical Directorate
author_link: https://github.com/craig-shenton
---

We have been collecting stats on open repositories of NHS and related healthcare organisations. We use the open [GitHub API](https://docs.github.com/en/rest/reference/orgs) to pull data from open (public) repositoiries as `.json` files, then flatten the data into `pandas` dataframes for analysis. This has produced an interesting dataset that has lots of potential for further analysis and visualisations. 

<a href="https://nhs-pycom.github.io/opensource-health-statistics/">
    <img class="nhsuk-image__img" style='border:1px solid #212b32' src="../images/posts/open-source-stats-min.png" alt="Open Analytics Template">
</a>

## Use of open-source software in the NHS

Open source is the practice of publishing the source code of a software project so that anyone can read, modify, re-use, and improve that software. For more on precise terms, see the Open Knowledge Foundation’s [Open Definition](http://opendefinition.org/od/2.1/en/). Programmers across the NHS frequently use existing open source packages and modules in their work, especially for routine data [analysis](https://pandas.pydata.org/) or [processing](https://hadoop.apache.org/), or for mobile development (as [part of the NHS App](https://www.nhs.uk/nhs-app/nhs-app-legal-and-cookies/nhs-app-open-source-licences/), for instance). 

The ‘cambrian explosion’ visualisation captures the rise in open-source software in recent years. From the first open-source repo published by NHS England in 2014, to over 1,200 today. Python, R, and webdev tools (HTML, css, Ruby, PHP) are the most popular languages.

<iframe width="900" height="550"
  src="../static/openhealth-stats-plotly"
></iframe>

## Why whould we open-source our code?

As set out in the [NHS Digital Service Manual](https://service-manual.nhs.uk/standards-and-technology/service-standard-points/12-make-new-source-code-open), public services are built with public money–so unless there’s a good reason not to (security for example), all code produced by the NHS should be made publicly available. 

>Open source means that the NHS can give our work back to the people who fund it, the public: allowing them to more easily join our staff, more quickly develop products and SMEs to support us, and better understand and trust the work we do on their behalf. 
[NHS Open-source Policy](https://github.com/nhsx/open-source-policy)

To this end, the [Department of Health & Social Care](https://www.gov.uk/government/publications/data-saves-lives-reshaping-health-and-social-care-with-data-draft/data-saves-lives-reshaping-health-and-social-care-with-data-draft) has made a commitment to make all new NHS code open source and published under [open licences](https://opensource.org/licenses) such as [MIT](https://opensource.org/licenses/MIT) and [OGLv3](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/), which define the legal terms for free access and reuse.

The Transformation Directorate of NHS England (NHSX) has aslo published [draft guidance on how to open source your code](https://github.com/nhsx/open-source-policy) for health and care organisations with guidance on where to put the code, how to license and what licences to use, how to maintain and case studies of teams who have done this. 

**The NHS Open Source Policy will become officially available in Summer 2022**

## Contributions
The [Open-Source Health Statistics](https://nhs-pycom.github.io/opensource-health-statistics/) project was created by developers at: 

### [NHSX](https://www.nhsx.nhs.uk/)
- [Craig Robert Shenton, PhD](https://github.com/craig-shenton)
- [Mattia Ficarelli, PhD](https://github.com/mattia-ficarelli)
- [Mary Amanuel](https://github.com/maryamanuelnhsx)
- [Arouba Zubair](https://github.com/Arouba)

### [NHS Business Services Authority](https://www.nhsbsa.nhs.uk/)
- [Adam Ivison](https://github.com/admivsn)