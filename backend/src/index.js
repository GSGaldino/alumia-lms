const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

const port = process.env.PORT || 3333;

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use('/', routes);

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app;
