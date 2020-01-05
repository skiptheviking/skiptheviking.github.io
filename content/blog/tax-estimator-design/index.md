---
title: Design a tax estimating app
date: "2019-01-03T22:40:32.169Z"
description: Build a ReactJS webapp that exposes your REAL marginal rate...
---

## Conceptual Design

Originally, I wanted to create a REST service that would receive the input of someone's tax data and return the output of it's calculation.  This design would allow
me to reuse the tax estimator service among a web app, ios and android app, and any other services. 

After working on the app I decided to run the calculations client side.  Mainly, at this point in the development,
I'm just going to have a web app.  And since this is not currently yet persisting data, I can build the app
without a backend. 

### Technical Design

Taxes are a funny thing.  You have gross income, modified adjusted gross income, adjusted gross income, and taxable income.  It gets really tricky
when you are married calculating separate FICA's, passive losses, and student interest.   And don't get me started on rental income....

Anyhow, initially I was build an entity named TaxDataInput that I could pass to a control 
object called TaxCalculator to calculate theproper numbers.  But I found this design taking 
far too long.  Java double primitative's were hard to test (for currency assmptions they are awful), 
so of course I switch to the BigDecimal.  Even then I found myself converting doubles into BigDecimal and back into
doubles to do calculation.  The syntax was verbose.

So instead wrote a quick model in javascript, and chained computed values together.  While this 
is technically causing redundant computations, it runs instantly in the browser. So for the development speed I moved my
model to the front end and now I am able to develop much faster.



