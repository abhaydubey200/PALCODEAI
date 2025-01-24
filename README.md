PALCODEAI Backend API Project
Overview
This project implements a backend API using Node.js, Express, and PostgreSQL. The API allows the management of engagement posts, collections, and products. It includes features for fetching posts, managing collections, and retrieving the most popular posts and products.

Features
Fetch posts, their content, and associated products for a given tenant.
Create new collections and add posts to them.
Create new products with a name, image, and SKU.
Retrieve the top 5 most-viewed posts and products for a given tenant.
Implements security, validation, and performance optimizations.
Requirements
Node.js v16+
PostgreSQL v12+
npm (Node Package Manager)
Setup Instructions
Step 1: Clone the Repository
bash
Copy
Edit
git clone https://github.com/abhaydubey200/PALCODEAI
cd PALCODEAI
Step 2: Install Dependencies
bash
Copy
Edit
npm install
Step 3: Configure PostgreSQL
Create a database named engagement in PostgreSQL:
sql
Copy
Edit
CREATE DATABASE engagement;
Restore the provided backup file if applicable.
Step 4: Configure Environment Variables
Copy .env.example to .env:
bash
Copy
Edit
cp .env.example .env
Update the .env file with your PostgreSQL credentials:
plaintext
Copy
Edit
DB_NAME=engagement
DB_USER=postgres
DB_PASSWORD=root
DB_HOST=localhost
PORT=5000
JWT_SECRET=your_secret_key
Step 5: Start the Server
bash
Copy
Edit
npm start
API Endpoints
Posts
Fetch Posts
GET /api/posts?tenant_id=<id>
Fetches all posts, their content, and attached products for a given tenant ID.

Top 5 Viewed Posts
GET /api/posts/top?tenant_id=<id>
Retrieves the top 5 most-viewed posts for a given tenant.

Products
Create Product
POST /api/products
Adds a new product with a name, image, and SKU.
Body:

json
Copy
Edit
{
  "name": "Product Name",
  "image_url": "https://example.com/image.jpg",
  "sku": "PROD123"
}
Top 5 Viewed Products
GET /api/products/top?tenant_id=<id>
Retrieves the top 5 most-viewed products for a given tenant.

Collections
Create Collection
POST /api/collections
Creates a new collection.
Body:

json
Copy
Edit
{
  "collection_name": "My Collection"
}
Add Posts to a Collection
POST /api/collections/:collection_id/posts
Adds a post to a specific collection.
Body:

json
Copy
Edit
{
  "post_id": 1,
  "duration_in_seconds": 120
}
Testing
Use Postman, Insomnia, or any HTTP client to test the APIs.
Example Postman collection (if available): [Postman Collection URL or JSON File].
Security
JWT Authentication: Secures the API endpoints using token-based authentication.
Validation: Uses Joi for request payload validation.
Error Handling: Centralized error-handling middleware ensures all API responses are standardized.
Performance Optimizations
Indexed columns frequently used in database queries (e.g., tenant_id).
Optimized database relationships using Sequelize associations.
Added pagination where applicable to handle large datasets.
Deployment
This project can be deployed on any cloud service like Heroku, Render, or Railway.

Update .env with the production database credentials.
Install any necessary deployment dependencies (e.g., dotenv, pg).
Contributing
If you'd like to contribute:

Fork the repository.
Create a new branch:
bash
Copy
Edit
git checkout -b feature-name
Commit your changes:
bash
Copy
Edit
git commit -m "Add a new feature"
Push to the branch:
bash
Copy
Edit
git push origin feature-name
Submit a pull request.
Author
Abhay Dubey: GitHub Profile
