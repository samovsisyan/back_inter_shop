// module.exports = {
//   users: require('./users'),
//   regions: require('./regions'),
// };




const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/regions', require('./regions'));

module.exports = router;
