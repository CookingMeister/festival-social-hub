# music-festival-hub

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

![alt text](client/public/logo.png)

## www.customfestivalwear.ca

Custom Festivalwear is the ultimate destination for connecting with fellow festival enthusiasts and unleashing your personal creativity! 

**Final Project**

## Description

customfestivalwear.ca is the ultimate destination for connecting with fellow festival enthusiasts and unleashing your personal creativity! Our colorful platform will soon offer a unique U-Design feature and a vibrant social networking experience where users can share festival tips, favorite artists, fashion inspirations and catch all the latest festival news and updates worldwide! 

## Table of Contents

- [Live Demo](#live-demo-video)
- [Getting Started](#getting-started)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Built-With](#built-with)
- [Credits](#credits)
- [Deployment](#deployment)
- [License](#license)

## Live Demo Video

## Getting Started

### Installation Instructions

Follow these steps to set up and run the application locally.

#### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.x or higher recommended)
- npm (Node Package Manager) installed
- Nodemon installed
- MongoDB installed and running locally or access to a MongoDB Atlas cluster

#### Setting Up Your Project

To set up the project, follow these steps:

1. Clone the repository

2. Install dependencies

Navigate to the project directory and run: `npm install`

3. Set up environment variables

Create a .env file in the root of your project directory. Add the necessary environment variables as specified in the .env.Example file provided in the project. For example:

```code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/yourdatabasename
JWT_SECRET=your_secret_here
```

Make sure to replace the placeholder values with your actual data.

4. Start the MongoDB server and seed the database

Ensure your MongoDB server is running. If you're using a local MongoDB server, you can start it with: `mongod`

Next, seed the database with the provided seed data: `npm run seed`

If you're using MongoDB Atlas, ensure your connection string in the .env file matches your cluster's connection details.

5. Run the application

To start the application, run: `npm start`

This will start the server on the port specified in your .env file (or port 3000 by default). You can access the application by navigating to [localhost:3000](http://localhost:3000) in your browser.

#### Development

For development, you might want to run the application in development mode with nodemon for automatic server restarts on code changes: `npm run dev`

Ensure you have `nodemon` installed globally or as a dev dependency in your project.

## User Story

AS A festival vendor and enthusiast

I WANT a one-stop shop to buy festival merch, buy tickets, connect with festival friends, design my own looks, post my own photos and experiences and get the latest updates

SO THAT I can stay up to date with festivals and friends across the globe

## Acceptance Criteria

**Main**

GIVEN this is a festival minded application

WHEN I see the customfestivalwear.ca logo of the main page

THEN A photo carousel will start to rotate through Best Sellers

WHEN I click on a shortcut button 

THEN I am directed to either festival event news, festival tricks, tips and hacks or an amazon store specialized in festival gear.

**Register**

WHEN I click register

THEN I am brought to the registration page that asks my name, email and for a password to be created

WHEN click submit

THEN I am automatically brought to my profile page

**Profile**

WHEN I go to the Profile page

THEN I can add and update sections name, username, about me, favorite festival and a place to upload their profile image

WHEN I am happy with my profile i can click submit to save

THEN if i change my mind I can click delete

**Admin**

WHEN I go to Admin Page

THEN I can see a product form where i am able to update price, title, description, stock and add or delete items

WHEN I scroll to the bottom

THEN I see a Users form where i am able to update and delete users

**Art Market**

WHEN I go to The Art Market

THEN I can click on each drop down menu searching by style, size or bestsellers

WHEN I find the item I want to purchase 

THEN I click the Add to Cart Button to purchase 

THEN  I am brought to the checkout form

WHEN I add my personal and payment information and click submit

THEN I am brought to the Order Confirmation Modal  that displays my cart items plus tax and shipping and the personal and payment information with a randomly generated order confirmation number

## Built-With

![alt text](client/public/builtwith.png)

-[Stripe](https://docs.stripe.com/payments?payments=popular) (Future Development)

## Credits

Shawn Meister:🎨🔧 Lead Developer, Backend Development, Database Design, Debugging & Testing, Frontend Design & Styling

Samantha Allen:🎨🔧 Frontend Development, Database Design, Debugging & Testing, Frontend Design & Styling

Sam Greenwood:🎨🔧 Project Concept, Presentation & Design, Frontend Development, Assets, Frontend Design & Styling & Testing

**Assets**

Color Pallette from Coolors
![alt text](client/public/coolors.png)

Socials for Site: [Facebook ](https://https://www.facebook.com/customfestivalwear)

Artwork: 

## Credits

This app was created by <a href='https://github.com/CookingMeister'>CookingMeister</a>,
<a href='https://github.com/SamGreenwood84'>SamGreenwood84</a> and <a href='https://github.com/samamiraa'>Samamiraa</a> on criteria from the University of New Brunswick's <a href='https://www.unb.ca/cel/career/index.html'>edX Coding Bootcamp program</a>.
Program materials, <a href='https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started'>MDN Web Docs</a>, <a href='https://www.w3schools.com/'>W3Schools</a>, <a href='https://stackoverflow.com/'>stackOverflow.com</a> and <a href='https://reactrouter.com/en/main'>React Router</a> documentation were referenced for this app.
Tasks were organized using <a href='https://trello.com'>Trello.</a>

## Questions

If you have an questions about this app, please contact me at [LinkedIn](https://www.linkedin.com/in/shawn-meister-bb646b29a/). More of my work can be viewed at [Github](https://github.com/CookingMeister).

## Deployment

GitHub Repository Link [Click Here!](https://github.com/CookingMeister/music-festival-hub.git)

Google Drive Link: [Click Here!]( https://)

Canva Link to presentation: [Click Here!](https://www.canva.com/design/DAGCJ5D603k/A4Iv53Xum715XocP2SlybQ/edit?utm_content=DAGCJ5D603k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

![alt text](client/public/qr.png)

## License

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2024
