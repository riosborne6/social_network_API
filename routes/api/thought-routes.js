const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  removeReaction,
  getReactions
} = require('../../controllers/thoughtController');

// /api/thought
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thought/:id
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/reactions
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

router
  .route('/:thoughtId/reactions')
  .post(getReactions)

module.exports = router;
