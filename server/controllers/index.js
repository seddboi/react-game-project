const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes); //serve the data, localhost:300/api/anime /998383

module.exports = router;