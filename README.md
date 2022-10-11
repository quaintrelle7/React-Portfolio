# Create a react app:

- npx create-react-app portfolio-app

- npm start

## Clear the contents inside from app.js

- Make the components folder and create the following JS files, inside it.

    - About.js
    - Contact.js
    - Navbar.js
    - Projects.js
    - Skills.js


To send over any submitted form data to Netlify, Netlify Forms needs to recognize a form as static HTML. Because our React app is controlled by JavaScript and doesn't consist of plain HTML, we need to add a hidden form to our index.html file in the public folder.

As you can see above, we are encoding the form data with a special encode function that you see here.


How does this stick to top of the page on a larger device? With the help of the class md:sticky on our header element.

This class means that it will have the style rule position: sticky;

#### Configure taiwind css

Check npm install for taiwind css.

Add following to your index.css file:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

If tailwind doesn't work do npm start

#### Create the logos folder inside src

This stores all the logos of your skills.

#### Create js files to store data

Create js files to store projects, contacts, and your education data.

#### Deploy app on netlify for free!

Share your portfolio with others.
