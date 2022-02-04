const Mongoosee = require('mongoose');

const TodoSchema = new Mongoosee.Schema({
    title: {
        type:String,
        trim: true,
        required: true,
    }
},{versionKey:false, timestamps:true});

module.exports = Mongoosee.model('Todo', TodoSchema);