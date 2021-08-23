"# cakeOrderingSystem" 
<h1> DESCRIPTION </h1>
<p> This project is a real-time Food Ordering web application, having two panels - </p>
<li> A customer panel and an admin panel  </li>
<li> It contains a home page, menu page, Cart page, log in, and register pages.</li>
<li> The role of the admin is assigned to a particular user only who is allowed to access the admin panel.</li>
<li> A customer can order food, gets and unique order_ID, and track their orders.</li>
<li> Meanwhile, the admin receives the order ( including all the order details in tabular form along with the order_Id )and updates the order status.
The customer can track the order. </li>
<li> Sessions are generated in the database once a user logs in and are deleted after he logs out. Similar sessions are for an order, which is deleted when the food is delivered.</li>

<h1> FEATURES </h1>
<li> Ejs is used for generating web pages includes dynamic data and sharing template pieces with other web pages.</li>
<li> Passwords are secured (hashed passwords) using BCRYPT JS.</li>
<li> The user must log in to order.</li>
<li> Webpack Mix is used, which is also clean and fluent for API defining. </li>

<br>
<h2> Images of project </h2>


![Screenshot (9)](https://user-images.githubusercontent.com/78613045/130315181-95cc17e6-2c9b-41dc-a5ad-c3f5a1aa3e05.png)
<h3> Home Page </h3>
<br>

![Screenshot (10)](https://user-images.githubusercontent.com/78613045/130315216-d53ccaa3-c853-4d64-8224-bf95c50720e7.png)
<h3> Cart Page </h3>
<br>

![Screenshot (11)](https://user-images.githubusercontent.com/78613045/130315237-ac81f18c-46d4-4d9d-bc83-99accafa4aae.png)
<h3> Menu Page </h3>
<br>

![Screenshot (12)](https://user-images.githubusercontent.com/78613045/130315246-ebcf8b74-3ea1-42b5-9b23-02e455f7137c.png)
<h3> Login Page</h3>
<h5> Created with use of passport </h5>
<br>

![Screenshot (14)](https://user-images.githubusercontent.com/78613045/130315292-e06c65e4-008e-44fb-bce3-1923d99b0358.png)
<h3> Databae MongoDB Sessions for user login </h3> 
<h5> Here passwords are stored in hashed form with the use of Bcrypt JS, these passwords can not be easily decrypted. </h5>
