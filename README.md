# Pegasus Games

[Link to live app](https://pegasus-games.king-sawyer.vercel.app/)

Pegasus Games is a local board game shop that I was lucky enough to be allowed to create a website for.



This project was created using many different techniques in React including:

- React routing
- Using context to minimize prop drilling
- Utilizing render props to redirect the users location
- Both class and functional components

Other Technology Used:
- JWT authentication used to verify accurate administrative abilities
- Advanced CSS
- JSX used to simulate HTML

![mainPageImage](https://i.imgur.com/DLC4D0E.png)

In addition to creating this client side application, I created a backend for this project utilizing Heroku to host a database used to store tables for product information and verified users.



This project is optimized for both mobile and web browsing. 


![boardGamePageImage](https://i.imgur.com/Wb2FrgG.png)


![mobileView](https://i.imgur.com/eTqGmfm.png)



## API Documentation:
- GET /api/products returns all products in the table
- POST /api/auth/login compares the users username and password with the stored information in the users table to verify their credentials and logs them in.
- POST /api/products verifies the user has a valid bearer token and allows the user to add a new product to the products table
- PATCH /api/products verifies the user has a valid bearer token and allows the user to modify a product in the products table
- DELETE /api/products verifies the user has a valid bearer token and allows the user to delete product from the products table
