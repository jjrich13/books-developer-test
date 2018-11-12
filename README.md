# Developer Test

## Description
Given that you have a table “Books” populated with the book’s ISBN number, title and a description, write the code tocreatethefollowingHTMLoutput. Youshouldlistthefullalphabet,onlyunderlining/linkinglettersthanhave titles starting with that letter. Clicking on a letter should bring you to that Letter Header above the book listings, and each letter header should only be listed once. Adding a book will update the DB and add the book to the list. You only need to write the code for this page below.


## Technologies Used
- ReactJS
- PostgreSQL
- Node.js
- Express

## Implementing and Running

For and already deployed version go here: https://safe-wildwood-34616.herokuapp.com/

To run it locally follow these steps:

1. Clone or download this repository 

2. `npm install`

3. Create SQL database `CREATE DATABASE books`

4. Create the following table:


```
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    "ISBN" integer UNIQUE,
    title character varying(255),
    description text
);

```

5. In one command line window `npm run client`

6. In another command line window `npm run server`
