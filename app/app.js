const express = require('express');
const app = express();

const ctrl_main = require('./controllers/controllers')


// configuration du moteur de template
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// on sert les assets statiques
app.use(express.static(__dirname + '/public'));

// Cross Origin middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// à voir ?
app.get('/appelapi',ctrl_main.appel);
app.get('/',ctrl_main.home);



const server = app.listen(3000);