## Instructions

This part of the interview process allows us to learn more about your software engineering and web development skills. Below is a description of a CRUD API that manages products, keeps track of their pricing and their view counts. You are given a boilerplate application with parts that are incomplete. The task is to add features to the application, adapt some parts of it and come prepared at the next interview with suggestions on how to improve it.

The boilerplate application has some basic components set up: a database connection configuration, and an empty controller:
- Add an API to get a single product
- Implement fetching of the currency conversion

When a single product is requested, all fields of that product are returned and the view-count for that product is incremented. The request can optionally specify a currency, in which case the price should be converted to the requested currency before being returned. We need to support the following currencies:
*	USD (default)
*	CAD
*	EUR
*	GBP

The mock exchange rates are retrieved from the mock API https://currency-api-mock.highbond-s3.com/live. Tests are optional but we would like to hear from you how would you design such tests at the interview.
