// Requiring the Express Router
const router = require('express').Router();

// Set the requirements from users-controller
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/users-controller');

// /api/users <GET, POST>
router.route('/').get(getAllUsers).post(createUsers);

// /api/users/:id <GET, PUT, DELETE>
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// /api/users/:userId/friends/:friendId <POST, DELETE>
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

// exporting router
module.exports = router;