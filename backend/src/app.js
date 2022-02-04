const express = require('express');
const config = require('./config');
const database = require('./database');
const Router = require('./routers');
const cors = require('cors');

config();
database();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/todos',Router.TodoRouter);


app.listen(process.env.APP_PORT, () => {
    console.log(`Server started at http://localhost:${process.env.APP_PORT}`);
})