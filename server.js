const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

// Store student records in memory
let students = [];

// Home route
app.get('/', (req, res) => {
    res.send('Student Management API is running');
});

// POST - Create student
app.post('/api/students', (req, res) => {

    const { id, name, email, course, age } = req.body;

    // Validate mandatory fields
    if (
        id === undefined || id === null ||
        !name || !email || !course ||
        age === undefined || age === null
    ) {
        return res.status(400).json({
            message: 'All fields are mandatory'
        });
    }

    // Check duplicate student ID
    const existingStudent = students.find(student => student.id == id);

    if (existingStudent) {
        return res.status(409).json({
            message: 'Student ID already exists'
        });
    }

    // Create student record
    const student = {
        id,
        name,
        email,
        course,
        age
    };

    // Store in memory array
    students.push(student);

    return res.status(201).json({
        message: 'Student created successfully',
        student: student
    });
});

// GET - Retrieve all students
app.get('/api/students', (req, res) => {

    res.status(200).json({
        message: 'Students retrieved successfully',
        students: students
    });

});

// GET - Retrieve student by ID
app.get('/api/students/:id', (req, res) => {

    const id = req.params.id;

    const student = students.find(s => s.id == id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    res.status(200).json({
        message: 'Student found successfully',
        student: student
    });

});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});