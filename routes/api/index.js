const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/user-routes', userRoutes );
router.use('/thought-routes', thoughtRoutes);

module.exports = router;
