# iTechArt-React-JS-Lab-2021

Ссылка на деплой: https://dmitri611.github.io/iTechArt-React-JS-Lab-2021/

Objective: to develop an application for pizza delivery.

Roles: manager and buyer.

Technologies: HTML, CSS, Material UI, SPA, React / Redux, Firebase, Jest.

Buyer's capabilities:

Create an account. Only one account can be registered per email.
Log in using email / password.
Working with a profile - edit Name, Surname, delivery address.
View the menu (name, ingredients, photo, price).
Add pizza to the basket, specify the size additionally.
Checkout. Additionally specify: time (or "as soon as possible" option), payment method (by card to the courier / cash to the courier) and promotional code (optional).
Automatically fill the cart using a set of items from one of the previous orders.
View your order history.
Remove your account from the profile form, show a confirmation dialog.
Manager capabilities :

Log in using email / password.
View the menu.
Add / remove / edit menu items (name, ingredients, photo, price for pizza of each size). In the basic part of the TK, the picture is from the link, in the additional part - the file in firebase.
Create / view / edit / delete promotional codes (code, name, percentage of price reduction, poster). In the basic part of the TK, the picture is from the link, in the additional part - the file in firebase.
View the list of orders, set the order status (processed / canceled / completed).
Create / view / edit / delete user profiles.
 

Implementation:

Develop an application design: principles of layout of the entire application and individual parts (views, header, footer, modal windows, etc.), styles of elements (tables, blocks, etc.) using HTML / CSS.
Develop a page for forming a menu for a manager using HTML / CSS.
Develop a script for forming a menu. The pizza dataset is stored in js.
Add the ability to add / view details / edit / delete menu items (data is still stored in js).
Develop a manager page to work with a list of users, with the ability to add / view details / edit data using HTML CSS (data is stored in js).
Create a react application project.
Implement the previously developed view for working with the game table in react (data is loaded from Local Storage into the state of the parent component when the application is initialized. When saving, Local Storage is updated.) . 
Apply Material-UI to style the components.
Develop a view for user authorization ( user data is stored in the state of the parent component) .
Implement the previously developed view for working with the users table in react ( data is stored in the state of the parent component) .
Using react router, implement the login to the application from the authorization view. After successful authorization, a transition is made to the view for working with the menu table, with the ability to switch to the view for working with the users table.
Implement a few purely functional components using hooks. Optional: completely switch to using functional components using hooks.
Add pagination capability for pages (pagination) with user lists and menu items.
Add the ability to search for pizzas by Name, Ingredients.
Organize a unified data store for your application using redux. Initialize storage with constants.
Implement all previously developed components according to the Smart-Dump scheme.
Implement the use of dialogs to confirm deletion.
Implement user input validation.
Design a firebase database to store application information.
Implement asynchronous work with a remote database. Storage initialization to use the data received from the remote database.
Implement the rest of the views for the manager to work with.
Design all views for the user experience.
Add work with files to the application. Pictures should now be stored in firebase Storage.
Use firebase to delete users.
 

Additional requirements:

Create and process actions using redux-actions.
With the permission of the mentor to add to the project ImmutableJS or immer of your choice.
Add component snapshot tests to the project
Rewrite middleware using redux-saga.
Add reducer tests to the Unit project.
Add end-to-end tests to the project (Puppeteer)
 

Rockstar requirements:

Implement application internationalization
The ability to navigate and control the application using the keyboard.
Screen reader app availability
Implement Dark mode
Apply TypeScript to implement one or more components
Prepare components for reuse (Storybook)
 
