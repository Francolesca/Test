const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors')
const tasksRoutes = require('./routes/tasks.routes');


dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(tasksRoutes);


app.listen(process.env.PORT);
console.log('Server on port: ' + process.env.PORT);