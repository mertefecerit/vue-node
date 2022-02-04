const Mongoose = require('mongoose');

Mongoose.connect(`mongodb+srv://<user>:<password>@cluster0.jsvxs.mongodb.net/vueNode?retryWrites=true&w=majority`);

Mongoose.connection.once('open', (error, response) => {
    console.log('Database Connection Ok')
});

module.exports = () => {
    // Export like function
}