const express = require('express');
const app = express();
const morgan = require('morgan');

// Setting Port
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

// Start Server

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
