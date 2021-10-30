# Intro
The https://gutendex.com/ API allows us to access a list of all the books from Project Gutenberg.

We need a Web Application that allows us to list all the books, access the book details, and let us mark our favorite books.

# Requirements
## Frontend Application
1. In the frontend application, we need two pages:
   1. **List of Books**
      1. This page will show a list of books, we only need to show the book _title_. This title will be a link that goes to the **Book Details** page.
      2. The gutendex API returns the books paginated, so we must create a button to _“Load more books”_ at the end of the page.
   2. **Book Details**
      1. On the Book Details page, we will show the following book’s attributes: _title_, _authors_, and _cover image_. All these attributes can be found in the book object that comes from the API.
      2. We will also show a button that will mark/unmark the book as a favorite. To know where we will save the favorite books states, read the section Backend Application.
2. The frontend application must be implemented in React. You can use any extra frameworks or libraries to complete the application.

## Backend Application
Sadly, the gutendex API doesn’t allow us to mark books as favorites, so we will implement a simple API for this.
1. The API should have an endpoint `POST /book/{bookId}/favorite` which receives the payload `{favorite: boolean}`
2. To avoid a persistence layer, use https://jsonbase.com/ to save your data.
3. The backend application must be implemented in node.js. You can use any framework or library to complete the application.
