require("dotenv").config();
const path = require("path");
const express = require("express");
const router = require("./app/router");
const app = express();
const PORT = process.env.PORT || 3000;

const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  cookie: {}
}));


app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cross Origin middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

const sessions = [];

app.use(router);

// mise en place de socket.io avec notre app
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// on met en place la gestion de l'écoute des canaux
// c'est un router mais pour les sockets
io.on('connection', (socket) => {

  //j'enregistre mon socket dans ma session
  //req.session.user.socket = socket;
  //console.log(socket);

  socket.on('chat message', msg => {
    //console.log(msg);
    io.emit('chat message', msg);
  });
});


server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
