# CRUD

* What is it?
* Why don't we use it?
* (Or... Why doesn't Garrett use it?)

## CRUD actions
Create
Read
Update
Delete

## BREAD
Browse
Read
Edit
Add
Delete

## REST
REpresentational
State
Transfer

Plan for making your routes
Great for defining routes that do BREAD stuff to resources

## REST example

**Route:** A route is the HTTP verb (GET, POST, etc.) plus the path (e.g. `/users`)

Uniform Resource Identifier
Uniform Resource Locator

Users
  Browse  GET /users
  Read    GET /users/:identifier (the ID, username, email adress, etc.)
  Edit    POST /users/:identifier
  Add     POST /users
  Delete  POST /users/:identifier/delete

Stores
  Browse  GET /stores
  Read    GET /stores/:id
  Edit    POST /stores/:id
  Add     POST /stores
  Delete  POST /stores/:id/delete

(Store) Items
  Browse  GET /stores/:store_id/items
  Read    GET /stores/:store_id/items/:item_id
  Edit    POST /stores/:store_id/items/:item_id
  Add     POST /stores/:store_id/items
  Delete  POST /stores/:store_id/items/:item_id/delete

Ratings
  Browse  GET /stores/:store_id/items/:item_id/ratings
  Read    GET /stores/:store_id/items/:item_id/ratings/:rating_id
  Edit    POST /stores/:store_id/items/:item_id/ratings/:rating_id
  Add     POST /stores/:store_id/items/:item_id/ratings
  Delete  POST /stores/:store_id/items/:item_id/ratings/:rating_id/delete


## HTTP verbs (methods)
GET
POST

PUT
PATCH
DELETE


**IDEMPOTENCE**
Distinguishing between PUT and POST
POST is not expected to be idempotent
PUT is
DELETE is also idempotent

result = 22;
result = result * 0;
result = result * 0;
result = result * 0;
result = result * 0;
result = result * 0;


## Resources

Users
Restaurants
Playlists
Images
Store items
Stores
Ratings
Map
Grades
Comments
Articles
Cities
Session
Passwords
