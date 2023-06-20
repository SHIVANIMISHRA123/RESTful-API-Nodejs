# RESTful-API-Nodejs.
 creating REST APIs with Express Js, Node Js and Mongo db.
 I am using mongoose here for database connectivity and performing all the crud operations here.

# Features.
  GET `/api/student/getall` - Retrieving all items from the database.
  GET `/api/student/getbyid/:id` - Retrieving a specific item by its ID.
  POST `/api/student/add` - Creating a new item in the database.
  PUT `/api/student/:id` - Updating an existing item by its ID.
  DELETE `/api/student/delete/:id` - Deleting an item by its ID.
	
# Tools Used, Dependies.
Express : 4.18.2
dotenv : 16.3.1
cors : 2.8.5
mongoose : 7.3.0

# Structure.
├─db
│ ├─connection.js
│ ├─model.js
├─ routes
│  ├─ route.js
├─.env
├─ index.js
├─ package-lock.json
└─ package.json




