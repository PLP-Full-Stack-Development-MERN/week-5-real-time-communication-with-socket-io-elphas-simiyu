# Real-Time Collaborative Notes

## Project Overview
This project is a real-time collaborative note-taking application built using the MERN stack with Socket.IO for real-time updates. It allows users to create, edit, and delete notes while seeing changes in real-time across multiple clients.

[Live demo][https://note-app-eight-livid.vercel.app/]

## Project Structure
```
real-time-notes/
├── backend/
│   ├── app.js
│   ├── controllers/
│   │   ├── notesController.js
│   │   └── usersController.js
│   ├── models/
│   │   ├── note.js
│   │   └── user.js
│   ├── routes/
│   │   ├── notes.js
│   │   └── users.js
│   ├── socket/
│   │   └── socket.js
│   ├── utils/
│   │   └── db.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteEditor.js
│   │   │   ├── NoteList.js
│   │   │   └── RoomList.js
│   │   ├── context/
│   │   │   └── NoteContext.js
│   │   ├── hooks/
│   │   │   └── useSocket.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── Room.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── setupTests.js
│   └── package.json
├── .gitignore
└── README.md
```

## Backend Setup
### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node app.js
   ```
   The backend will run on `http://localhost:3001`.

## Frontend Setup
### Prerequisites
- Node.js installed

### Steps
1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

## Running the Project
Ensure that both the backend and frontend are running. Open `http://localhost:3000` in multiple browser tabs to see real-time updates when editing notes.

## Features
- User authentication (optional)
- Real-time collaborative editing using Socket.IO
- CRUD operations for notes
- Room-based note sharing

## Troubleshooting
- Ensure MongoDB is running before starting the backend.
- Check console logs for errors in both frontend and backend.
- Use `npm install` in both directories if dependencies are missing.

## Future Enhancements
- Implement user authentication
- Improve UI/UX design
- Add version control for notes

