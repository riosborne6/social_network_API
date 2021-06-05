const router = require('express').Router();
const {
  getAllusers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/comments/<pizzaId>
router.route('/').get(getAllusers).post(createUser);

// /api/comments/<userId>/<commentId>
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router
  .route('/:userId/friends/:friendsId')
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
