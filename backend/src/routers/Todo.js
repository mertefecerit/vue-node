const router = require('express').Router();
const TodoController = require('../controllers/Todo');

router.route('/').get(TodoController.getTodos);
router.route('/:id').get(TodoController.getTodo);
router.route('/').post(TodoController.newTodo);
router.route('/:id').delete(TodoController.deleteTodo);
router.route('/:id').put(TodoController.updateTodo);

module.exports = router;