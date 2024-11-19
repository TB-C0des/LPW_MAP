const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// const db = mysql.createConnection({
//     host: '',
//     user: '',
//     password: '',
//     database: 'lms'
// });

// db.connect(err => {
//     if (err) throw err;
//     console.log('MySQL Connected...');
// });

// Create a book
app.post('/books', (req, res) => {
    const book = req.body;
    const sql = 'INSERT INTO books SET ?';
    db.query(sql, book, (err, result) => {
        if (err) throw err;
        res.status(201).send(`Book added with ID: ${result.insertId}`);
    });
});

// Read all books
app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Read a single book
app.get('/books/:id', (req, res) => {
    const sql = 'SELECT * FROM books WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Update a book
app.put('/books/:id', (req, res) => {
    const sql = 'UPDATE books SET ? WHERE id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(`Book updated with ID: ${req.params.id}`);
    });
});

// Delete a book
app.delete('/books/:id', (req, res) => {
    const sql = 'DELETE FROM books WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(`Book deleted with ID: ${req.params.id}`);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});