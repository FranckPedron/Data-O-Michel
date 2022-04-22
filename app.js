require("dotenv").config();
const path = require("path");
const express = require("express");
const router = require("./app/router");
const app = express();
const PORT = process.env.PORT || 3000;

// const http = require('http').Server(app);
// const io = require('socket.io')(http);


app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })


app.use(router);


// io.on('connection', (socket) => {
//     socket.on('chat message', msg => {
//       io.emit('chat message', msg);
//     });
//   });





app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
