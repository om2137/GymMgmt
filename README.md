# **GYM Management System**

This is a web application for pushing, managing and updating the clients information. (very initial thought) <br/>
Other features will be added.<br/>
Techstack used is MERN, NextJS as a react framework and Tailwind.CSS for styling.
MongoDB is used as a database and Cloudinary for storing files.

### Demo
Link: https://www.youtube.com/watch?v=VYdAvcyAPDo

## Technologies used
**NextJS, TailwindCSS, MongoDB, Cloudinary, Node**

## Services
1. Client Information storage
2. Automated Invoice

## Architecture
This is a NextJS project. it is majorly divided into 6 main folder 
1. components consist the major components used in the project like invoice, Button, navbar etc.
2. db consist the database connector file which help the mongodb to connect to the project.
3. Helper folder consist of the baseurl that will be used in different url like in production and in development
4. models folder consist of all the schema that are used in the project, currently it is using members and invoice.
5. pages is the main folder which consist of the frontend of the project which takes all the components from the other folder and presents it to user, it consist of all the api calls, authenticator etc.

## Installation 
For local installation 
first fork and then clone the repo
then open it in VSCode and run npm install
make .env.local file and add following 
replace it with your links

CLOUDINARY_URI= "your link" <br/>
NEXTAUTH_SECRET = ' replace ' <br/>
MONGO_URI= "your link <br/>
USER="user" <br/>
PASS="pass" <br/>

after adding the following run the project with, 
npm run dev
and you will have the project running locally

