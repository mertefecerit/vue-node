const TodoService = require('../services/Todo');
const httpStatus = require('http-status');

const getTodos = async (req, res) => {
    try {
        const todos = await TodoService.readAll();
        res.status(httpStatus.OK).json({
            status: 'OK',
            todos
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: 'SERVER ERROR',
            error
        });
    }
}

const getTodo = async (req, res) => {
    try {
        const todo = await TodoService.read(req.params.id);
        res.status(httpStatus.OK).json({
            status: 'OK',
            todo
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: 'SERVER ERROR',
            error
        });
    }
}

const newTodo = async (req, res) => {
    try {
        const newTodo = await TodoService.newOne(req.body);
        res.json({
            message:'newTodo',
            newTodo
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status:'BAD REQUEST',
            error
        })
    }
}

const deleteTodo = async (req, res) => {
    try {
        await TodoService.deleteOne(req.params.id);
        res.status(httpStatus.OK).json({
            status: 'OK',
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: 'SERVER ERROR',
            error
        });
    }
}

const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await TodoService.updateOne(req.params.id, req.body);
        res.status(httpStatus.OK).json({
            status: 'OK',
            updatedTodo
        });
    } catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: 'SERVER ERROR',
            error
        });
    }
}

module.exports = {
    getTodos,
    getTodo,
    newTodo,
    deleteTodo,
    updateTodo
}