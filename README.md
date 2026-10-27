# InstaLite — Backend API

A RESTful backend application built using **Node.js, Express.js, Prisma ORM, and PostgreSQL**. This project implements user management APIs with CRUD operations and a layered architecture.

## 🚀 Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — REST API framework
- **PostgreSQL** — Relational database
- **Prisma ORM** — Database access and schema management
- **dotenv** — Environment variable management

## 📁 Project Structure

```text
InstaLite/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   │   └── users.controller.js
│   ├── routes/
│   │   └── users.routes.js
│   ├── services/
│   │   └── user.service.js
│   ├── db.js
│   ├── index.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ravi912066-netizen/InstaLite.git
cd InstaLite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/instalite?schema=public"
```

Replace `USERNAME`, `PASSWORD`, and the database name with your PostgreSQL configuration.

**Never commit your `.env` file or real database credentials to GitHub.**

### 4. Create the database

Create a PostgreSQL database named `instalite`, or update `DATABASE_URL` to use an existing database.

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Apply database migrations

```bash
npx prisma migrate dev
```

### 7. Start the server

```bash
node src/index.js
```

The server runs at:

`http://localhost:3000`

## 📡 API Endpoints

Base URL: `http://localhost:3000`

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Check server status |

### User APIs

| Method | Endpoint | Description | Success Status |
|---|---|---|---|
| POST | `/users` | Create a user | `201 Created` |
| GET | `/users` | Get all users | `200 OK` |
| GET | `/users/:id` | Get a user by ID | `200 OK` |
| PATCH | `/users/:id` | Partially update a user | `200 OK` |
| DELETE | `/users/:id` | Delete a user | `204 No Content` |

## 📝 Example Requests

### Create a User

**POST** `/users`

Request body:

```json
{
  "username": "riya_travels",
  "email": "riya@example.com",
  "fullname": "Riya Sharma",
  "bio": "Travel enthusiast"
}
```

### Get All Users

**GET** `/users`

Returns an array of users stored in the database.

### Get a User by ID

**GET** `/users/1`

Returns the user matching the specified ID.

### Update a User

**PATCH** `/users/1`

Request body:

```json
{
  "fullname": "Riya Sharma Updated",
  "bio": "Travel and photography"
}
```

Only the provided, supported fields are updated.

### Delete a User

**DELETE** `/users/1`

Deletes the specified user and returns `204 No Content` when successful.

## 🏗️ Architecture

The application follows a layered architecture:

```text
Client
  ↓
Routes
  ↓
Controllers
  ↓
Services
  ↓
Prisma ORM
  ↓
PostgreSQL
```

- **Routes:** Define API endpoints and HTTP methods.
- **Controllers:** Handle HTTP requests, validate input, and send responses.
- **Services:** Encapsulate database operations and application logic.
- **Prisma:** Interacts with the PostgreSQL database.

## 🛡️ Error Handling

The user APIs handle common errors, including:

- `400 Bad Request` — Invalid or missing request fields.
- `404 Not Found` — User does not exist.
- `409 Conflict` — Duplicate username or email.
- `500 Internal Server Error` — Unexpected server error.

## 🔐 Security Notes

- Store database credentials in environment variables.
- Keep `.env` out of version control.
- Validate incoming request data.
- Avoid exposing internal error details in production.

## 🛠️ Future Improvements

- Posts CRUD APIs
- User authentication and password hashing
- Authorization and protected routes
- Request validation middleware
- Pagination and filtering
- Automated tests
- API documentation

## 👨‍💻 Author

**Ravi Yadav**

GitHub: [@ravi912066-netizen](https://github.com/ravi912066-netizen)

---

Built as a backend development project to practice REST API design, Express.js, Prisma ORM, PostgreSQL, and layered architecture.
