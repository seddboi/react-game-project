const router = require('express').Router();
const userRoute = require('./userRoutes');
const charRoute = require('./charRoutes');

router.use('/users', userRoute);
router.use('/char', charRoute);

module.exports = router;