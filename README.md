# Linked In Clone

1. Create a React app with a --template and redux

2. Create a Firebase project

Firebase allows us to create a backend, authentication, and host our application.

2.1. Create a database
2.2. Get started with Authentication
2.3. Registers the app so that you can deploy it afterwards
2.4. Install firebase CLI

```javascript
npm install -g firebase-tools
```

2.5. Copy the config SDK snippet

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyAKsGV-_plpTRS4O_rkodh5iSlIuJzAxro",
  authDomain: "linkedin-clone-72ae5.firebaseapp.com",
  projectId: "linkedin-clone-72ae5",
  storageBucket: "linkedin-clone-72ae5.appspot.com",
  messagingSenderId: "736680422870",
  appId: "1:736680422870:web:71afacfa41b04f0677c877",
};
```

3. Clean Up Template

- Delete App.test.js
- Delete Logo.svg
- Delete setupTests.js

\*\* We are going to be using the BEM naming convention

- Delete the header content in App.js
- Delete all styling in App.css
- Create a new rule for everything with a margin of 0 in index.css

4. Start Building

Start writing down all the components: Header, App Body: Sidebar, Feed, Widgets,

- Header
- App Body

  - Sidebar
  - Feed
  - Widgets

    4.1. Header

- Create a Header.js file
- Create and Import a Header.css file
- Left Section and right section: two containers
- Left Section: img for logo and div with an input plus an incon for the search. Using materials.io.

- Install Material UI

```javascript
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

```

- Add a Search Icon
- Add the LinkedIn Logo
- Style Header Left
- Add components for header right
- Create a reusable component HeaderOption
  - Icon
  - Text
- Style the HeaderOption
- Add an avatar

  4.2. Create Sidebar component

  - Sidebar top
  - Sidebar bottom
  - Stats

    4.3. Create Feed component
