// Requiring the Express Router
const router = require('express').Router();

// Set the requirements from thoughts-controller
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controllers');

// /api/thoughts <GET>
router.route('/').get(getAllThoughts)

// /api/users/:id <GET, PUT, DELETE>
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// /api/thoughts/:userId <POST>
router.route('/:userId').post(createThoughts);

// /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// exporting router
module.exports = router;