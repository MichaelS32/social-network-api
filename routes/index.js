// requiring express router
const router = require('express').Router();

// Imports api routes
const apiRoutes = require('./api');

// adds the /api prefix before all of our api routes
router.use('/api', apiRoutes);

// 404 error message
router.use((req, res) => {
    res.status(404).send("<h1>404 Error... 🧙‍♂️ the wizard couldn't find the page you were looking for at this time");
});

// exporting router
module.exports = router;