const router = require('express').Router();

const { route } = require('express/lib/application');
const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getTasks);

router.route('/task/create')
    .get('', TaskController.create)
    .post('/task/create', TaskController.createTask);

router.route('/task/delete/:id')
    .get(TaskController.delete)
    .post(TaskController.deleteTask);

router.route('/task/update/:id')
    .get(TaskController.update)
    .post(TaskController.updateTask);

module.exports = router;