# React Stack Project

This is a full-stack web application built with React for the frontend and Node.js/Express for the backend. The frontend uses Vite for fast development and build, while the backend is located in the `server/` directory. The project demonstrates a simple blog platform with features such as viewing articles, user authentication, and commenting.

## Features

- Modern React frontend with Vite
- Node.js/Express backend API
- Article listing and detail pages
- User authentication (login, create account)
- Commenting system

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the Repository

```bash
git clone <repository-url>
cd react-stack
```

### Install Dependencies

#### Frontend

```bash
npm install
```

#### Backend

```bash
cd server
npm install
cd ..
```

### Running the Project Locally

#### Start the Backend Server

In one terminal:

```bash
cd server
npm start
```

#### Start the Frontend Development Server

In another terminal (from the project root):

```bash
npm run dev
```

- The frontend will be available at [http://localhost:5173](http://localhost:5173)
- The backend API will be running at [http://localhost:8000](http://localhost:8000) (or as configured)

## Project Structure

- `src/` - React frontend source code
- `server/` - Node.js/Express backend source code
- `public/` - Static assets for the frontend

## License

This project is for educational purposes.
