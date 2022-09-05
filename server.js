// Require Express and Mongoose
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// require routes folder
app.use(require('./routes'));

// Connect mongoose to server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// logs our mongoose queries for debugging
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`** Connected the localhost on Port: ${PORT} 🎯`));