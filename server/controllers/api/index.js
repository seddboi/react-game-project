const router = require('express').Router();
const userRoute = require('./userRoutes');
const charRoute = require('./charRoutes');
const weaponRoute = require('./weaponRoute');

router.use('/users', userRoute);
router.use('/char', charRoute);
router.use('/weapon', weaponRoute);

module.exports = router;