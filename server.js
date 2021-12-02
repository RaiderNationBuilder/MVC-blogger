const express = require('express');
const routes = require('./controller/handlebarRoutes');
const userRoutes= require('./controller/api/user-routes')
const userRoutes= require('./controller/api/comment-routes')
const userRoutes= require('./controller/api/post-routes')

const sequelize = require('./config/connection');
// import sequelize connection

const { engine } = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(routes);
app.use(userRoutes)

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
    });
  });
  