# **GYM Management System**
## **Data storing and Invoicing app**
This is a web application for pushing, managing and updating the clients information. (very initial thought) <br/>
Automate and Deliever invoices(PDFs) of client through Whatsapp.<br/>
Broadcasting alerts and personalized messages to clients through whatsapp.<br/>
Other features will be added.<br/>
Techstack used is MERN, NextJS as a react framework and Tailwind.CSS for styling.<br/>
MongoDB is used as a database and Cloudinary for storing files.

### Demo
Link: //youtube link

## Features in pipeline
1. **UI Revamp.**
2. Sending invoice as whatsapp message as(pdf) automated.
3. popup alerts notification (Toast notifications)

## Features Planed
1. Search bar to nav bar.
2. Automated checkin (scanner based).

## Features done Recently
1. Invoice generation into pdf and saving as PDF locally.
2. Sending invoice as whatsapp message (as png) automated.

## Technologies used
**NextJS, TailwindCSS, MongoDB, Cloudinary, Node, Prettier**

## Functionality

![gymMgmtFlow drawio](https://user-images.githubusercontent.com/33827410/204362722-cefa0fce-a1fb-4a93-b17e-b6ee3d761c43.png)

**fig. FlowDiagram**

1. Client Information storage
  1. Creating, Reading ,Updating and Deleting per client's profile.(CRUD)
2. Automated Invoice
  1. Invoice generation and storing as PDF.
  2. Invoice as whatsapp message automated.

## Architecture



This is a NextJS project. it is majorly divided into 6 main folder 
1. components consist the major components used in the project like invoice, Button, navbar etc.
2. db consist the database connector file which help the mongodb to connect to the project.
3. Helper folder consist of the baseurl that will be used in different url like in production and in development
4. models folder consist of all the schema that are used in the project, currently it is using members and invoice.
5. pages is the main folder which consist of the frontend of the project which takes all the components from the other folder and presents it to user, it consist of all the api calls, authenticator etc.

## Installation 
For local installation,
 fork and then clone the repo to local machine,
then open it in Code editor(VSCode) <br/>
run `npm install` <br/>
make .env.local file and add following 
replace it with your links

`NEXT_PUBLIC_CLOUDINARY_URI= "your link" ` <br/>
`NEXTAUTH_SECRET = ' replace ' ` <br/>
`MONGO_URI= "your link"` <br/>
`USER="user"` <br/>
`PASS="pass"` <br/>
`NEXT_PUBLIC_ACCESSTOKEN="WhatsApp Cloud API access token"` <br/>
`NEXT_PUBLIC_TESTNUM="WhatsApp Cloud API test number"` <br/>
`NEXT_PUBLIC_PRODNUM="WhatsApp Cloud API production number"` <br/>

after adding the following run the project with, 
`npm run dev`
and you will have the project running locally

