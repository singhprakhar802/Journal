const express = require('express');
const path = require('path');
const router = require('./routes/route')

const app = express();
const port = 3000;

// Set up static files and views
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public')); 
app.use('/',router);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;