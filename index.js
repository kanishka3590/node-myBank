var express = require('express');
var app = express();
var CONFIG = require('./config');
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));

// const userRoutes = require('./routes/users.routes');
// const homeRoutes = require('./routes');
// app.use('/',homeRoutes);
// app.use('/',userRoutes);
console.log(CONFIG);

app.listen(CONFIG.PORT,CONFIG.HOST,function () {
  console.log('Server is Running by using express',CONFIG.PORT);
});
