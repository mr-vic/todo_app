const router = require('express').Router();

router.post('/todo', ToDoController.create);
router.get('/', ToDoController.getAll);
router.get('/todo/:id', ToDoController.getOne);
router.put('/todo/:id', ToDoController.updateCardType);
router.delete('/todo/:id', ToDoController.deleteCardType);

module.exports = router;