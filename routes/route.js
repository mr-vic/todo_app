const router = require('express').Router();

const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getTasks);

router.route('/task/create')
    .get(TaskController.create)
    .post(TaskController.createTask);

router.route('/task/update/:id')
    .get(TaskController.update)
    .post(TaskController.updateTask);

router.route('/task/delete/:id')
    .get(TaskController.delete)
    .post(TaskController.deleteTask);    

module.exports = router;