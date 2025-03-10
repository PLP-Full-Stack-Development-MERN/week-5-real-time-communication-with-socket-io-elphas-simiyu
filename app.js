require('dotenv').config();  // Load environment variables
const express = require('express');
const app = express();  // Initialize express first
const http = require('http').createServer(app);  // Now create server
const io = require('socket.io')(http);
const mongoose = require('mongoose');

// MongoDB Atlas Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://elphassimiyu123:elphassimiyu123@taskmanager.65min.mongodb.net/?retryWrites=true&w=majority&appName=taskManager';

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB Atlas Connection Error:", err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Note Schema and Model
const noteSchema = new mongoose.Schema({
    content: String,
    roomId: String
});
const Note = mongoose.model('Note', noteSchema);

// Get all notes
app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching notes' });
    }
});

// Create a new note
app.post('/notes', async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.json(note);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating note' });
    }
});

// Socket.io Event Listeners
io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
        console.log(`Client joined room ${roomId}`);
    });

    socket.on('leaveRoom', (roomId) => {
        socket.leave(roomId);
        console.log(`Client left room ${roomId}`);
    });

    socket.on('updateNote', async (note) => {
        try {
            const updatedNote = await Note.findByIdAndUpdate(note._id, note, { new: true });
            io.to(note.roomId).emit('updateNote', updatedNote);
        } catch (err) {
            console.error(err);
            socket.emit('error', { message: 'Error updating note' });
        }
    });
});

// Start the server
http.listen(3001, () => {
    console.log('🚀 Server listening on port 3001');
});

