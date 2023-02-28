const express = require('express');
const port = 3000;
const dotenv = require('dotenv').config();
const connectDB = require('./config/db.js');
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/post', require('./routes/post.routes.js'));

// Run serve 
app.listen(port, () => console.log(`Server connected ${port}`))