const router = require('express').Router();

const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getTasks);

router.get('/task/create', TaskController.create);
router.post('/task/create', TaskController.createTask);

router.get('/task/delete/:id', TaskController.delete);
router.post('/task/delete/:id', TaskController.deleteTask);

router.get('/task/update/:id', TaskController.update);
router.post('/task/update/:id', TaskController.updateTask);

module.exports = router;