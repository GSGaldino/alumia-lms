const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.PORT || 3333;


app.use(express.json());
app.use('/', routes);

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app;
