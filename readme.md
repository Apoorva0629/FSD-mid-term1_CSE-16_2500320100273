# Student Management API

## 1. Project Description

This project is a Student Management REST API developed using Node.js and Express.js. It allows users to create, view, update, search, and delete student records.

## 2. Technologies Used

* Node.js
* Express.js
* JavaScript
* Thunder Client
* dotenv

## 3. Features

* Add a new student.
* View all students.
* Search a student by ID.
* Update student details.
* Delete a student.
* Validate mandatory fields.
* Prevent duplicate student IDs.
* Handle errors using HTTP status codes.

## 4. Project Structure

```text
project/
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 5. Installation and Setup

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Create a .env file

Add the following:

```env
PORT=3000
```

### Step 4: Start the server

```bash
node server.js
```

Server URL:

`http://localhost:3000`

## 6. API Endpoints

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| POST   | /api/students     | Create a student  |
| GET    | /api/students     | Get all students  |
| GET    | /api/students/:id | Get student by ID |
| PUT    | /api/students/:id | Update student    |
| DELETE | /api/students/:id | Delete student    |

## 7. Sample JSON

```json
{
  "id": 1,
  "name": "Apoorva",
  "email": "apoorvasingh029@gmail.com",
  "course": "CSE",
  "age": 20
}
```

## 8. HTTP Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 400         | Bad Request           |
| 404         | Not Found             |
| 409         | Conflict              |
| 500         | Internal Server Error |

## 9. API Testing

All API endpoints are tested using Thunder Client in Visual Studio Code.

## 10. Data Storage

Student records are stored in an in-memory JavaScript array. Data is lost when the server restarts.

## 11. Author

**Name:** Apoorva Singh
**Roll Number:** 2500320100273
**Branch:** Computer Science and Engineering