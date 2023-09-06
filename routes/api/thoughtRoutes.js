const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    postReaction,
    deletethought,
} = require('../../controllers/thoughtController.js');

router.route('/')
.get(getThoughts)
.post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
      .post(postReaction);

router.route('/:thoughtId/reactions/:reationId')
       .delete(deleteReaction);
    
       
module.exports = router;
      