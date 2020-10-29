const router = require('express').Router();

const userController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

router.get('/users', userController.index);
router.post('/users', userController.create);

router.post('/session', SessionController.aluno);
router.post('/session/alumia', SessionController.alumia);
router.post('/dashboard', SessionController.logado);

module.exports = router;
