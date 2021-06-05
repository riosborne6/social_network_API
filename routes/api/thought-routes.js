const router = require('express').Router();
const {
  getAllthoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtController');

// /api/thought
router
  .route('/')
  .getAllthoughts(getAllThoughts)
  .createThought(createThought);

// /api/thought/:id
router
  .route('/:id')
  .getThoughtById(getThoughtById)
  .updateThought(updateThought)
  .deleteThought(deleteThought);

  // /api/reactions
router
  .route('/thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;
