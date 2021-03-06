# Capstone 1: SETBREAK

This application was made for my first capstone project for the Bloc/Thinkful Web Development course. It is a concert tracker application that music fans can use to keep track of concerts they've attended. Users can upload details about the concert including artist, venue, date, highlights, and notes. Inspiration for this application came from my friends' desire to recount concerts from the past year. This application was built to meet the specifications laid out by the Bloc/Thinkful course. The project's server-side code can be viewed on its GitHub repository here: https://github.com/sneakin-allie/setbreak-api

## Live Application

This application can be viewed here: https://setbreak-sneakin-allie.vercel.app/

The backend API is currently running here: https://vercel.com/sneakin-allie/setbreak/66RtADMKRviWkg74npPznViTsmSA

Both are hosted on Vercel with the SQL Database hosted on Heroku.

## Summary

SETBREAK has four main page branches. The Home/Landing Page, Concert Collection Page, Add New Concert Page, and Edit Concert Page.

The Home/Landing Page has brief instructions on what the application does and how to get started, as well as Sign Up and Log In forms for new users and existing users respectively. See below:

![Screen Shot 2021-07-21 at 10 00 58 AM](https://user-images.githubusercontent.com/68669789/126501557-f73a164f-332b-4c53-9353-5735fe0cf7de.png)

The Concert Collection Page lists a user's concerts with details the user has saved. The top of the page has an "Add New Concert" button for easy access and each concert listed has an "Edit" button so that users can edit all fields as desired. See below:

![Screen Shot 2021-07-21 at 10 02 42 AM](https://user-images.githubusercontent.com/68669789/126501813-19134616-c21f-4f34-8fc6-79daed47e7f6.png)

The Add New Concert Page displays a form where a user can enter information about a concert, including the artist, venue, date, highlights, and notes. Only the artist and venue are required so that a user can quickly save a concert and return to it later to add details about date, highlights, and notes. See below:

![Screen Shot 2021-07-21 at 10 03 47 AM](https://user-images.githubusercontent.com/68669789/126501995-45f09ff9-a82d-499e-9289-f85ad45bbe92.png)

The Edit Concert Page displays a form where a user can update information about a concert that has been saved. The input fields auto-fill with the previously saved information so the user can make accurate edits where desired. At the bottom of the form, there is a "Delete" button that deletes the concert from the collection. See below:

![Screen Shot 2021-07-21 at 10 03 47 AM](https://user-images.githubusercontent.com/68669789/126502092-ebb6e891-92d9-402d-aa29-b046b0b9f30f.png)

## Process

The design and implementation of this application went through multiple steps, each of which was approved by the grading team in intervals. I wrote a proposal and user stories, set up a Kanban board to manage my project, and created user flows and wireframes. The first version I built was a static version of the client-side application in React, and I presented this to users to do the first round of feedback and iteration. I implemented the full MVP of the application, including the API and database, and did a second round of feedback and iteration. Finally, I styled the application with typography, color, and a responsive layout.

## Technology Used

The front-end of this project was built in React, using Router, class components, state, props, and vanilla CSS. An API was created that handled all promises necessary to interact with the back-end API database.

The back-end of this project was built using Node.js, Express, PostgreSQL, and Knex. RESTful APIs were used along with middleware including Morgan, Express.json, Helmet, and CORS. CORS was implemented to ensure connection between the front-end application and back-end API.
