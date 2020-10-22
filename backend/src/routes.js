const router = require('express').Router();
const userController = require('./controllers/UserController');

router.get('/users', userController.index);
router.post('/users', userController.create);

module.exports = router;
