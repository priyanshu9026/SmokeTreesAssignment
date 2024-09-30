const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount Routes
app.use('/', routes);

// Sync Database and Start Server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
