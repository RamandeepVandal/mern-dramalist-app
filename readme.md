# Drama List

This is a full-stack project that allows users to manage and keep track of the dramas they have watched. The project is built using React, Bootstrap, Node.js, MongoDB, and Express.

## Getting Started

### To get started, clone this repository to your local machine. You will need to have Node.js and MongoDB installed on your machine. Follow these steps to run the project:

    Open a terminal window and navigate to the root directory of the project.
    Navigate to the client and server directory and run npm install to install the front-end and back-end dependencies.
    Navigate back to the client directory and run npm run dev to start the development server for the front-end.
    Open a second terminal and navigate to the server directory and run npm start to start the development server for the back-end.
    You will need to connect the application to your own database in the config folder (server -> config -> db.js).
    Once in the "db.js" file, replace "process.env.DRAMA_MONGODB" with the link to your MongoDB database.
    Open your browser and navigate to the link provided in the client terminal. The Drama List app will be displayed.

## Usage

### The Drama List app allows users to add, view, and edit the dramas they have watched.

#### Adding a Drama

To add a drama, users can use the find feature on the *find dramas page* or can search up dramas on the *search dramas page*. When they find an interesting drama, they click the *add to list* button to add the drama into the database. 

#### Deleting a Drama

To delete a drama, users should click the "Delete" button next to the drama they want to delete. They will be prompted to confirm the deletion before the drama is permanently removed from their list.

## Technologies Used

### This project was built using the following technologies:

    1. React: for the front-end UI
    2. Bootstrap: for styling the UI
    3. Node.js: for the back-end server
    4. Express: for building the REST API
    5. MongoDB: for the database

## Credits

All images used for this project are from "Free illustrations" and "Reshot"

Link to "Free illustrations": https://freeillustrations.xyz/illustration/website-illustrations/

Link to "Reshot": https://www.reshot.com/free-vector-illustrations/website/

The source of drama data and images are from the TMDB API.

Link to the "TMDB API": https://www.themoviedb.org/?language=en-CA