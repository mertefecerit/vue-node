const TodoModel = require('../models/Todo');

const read = (id) => {
    return TodoModel.findById(id);
}

const readAll = () => {
    return TodoModel.find();
}

const deleteOne = (id) => {
    return TodoModel.findByIdAndDelete(id);
}

const newOne = (payload) => {
    return TodoModel.create(payload);
}

const updateOne = (id, payload) => {
    return TodoModel.findByIdAndUpdate(id, payload, {new:true});
}

module.exports = {
    read,
    readAll,
    deleteOne,
    newOne,
    updateOne
}