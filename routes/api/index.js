// requiring express router
const router = require('express').Router();

// Set Routes for Users and Thoughts
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Adds /users to the routes in userRoutes
router.use('/users', userRoutes);

// Adds /thoughts to the routes in thoughtRoutes
router.use('/thoughts', thoughtRoutes);

// exporting router
module.exports = router;