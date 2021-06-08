require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const http = require('http').createServer(app);
const axios = require('axios');
const giftController = require('./controllers/giftController');
const path = require('path');

// const io = require('socket.io')(http, {
//     cors: { origin: "*" }
// });


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "uploads")));
app.listen(3333);

// let interval;
// let interval2;


// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }

//     socket.on('message', (message) =>     {
//         if (interval2) {
//             clearInterval(interval2);
//           }
        
//         interval2 = setInterval(() => getApiBids(message), 1000);
//     });
  
//   interval = setInterval(() => getApiGift(socket), 1000);

//   io.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//     clearInterval(interval2);
//   });




// });





// const getApiGift = socket => {


//     axios.get('http://localhost:3333/gift')
//     .then(function (response) {

//         // response.data.map((gift,i)=>{
//         //     nome = gift.nome;

//         //     axios.get('http://localhost:3333/historicBidsPerGift/'+gift.id)
//         //     .then(function (response) {
//         //         historic = response.data;
//         //     });

//         //     dataAll.push({nome: nome, historic: historic});
//         // });


//         io.emit('gift', response.data);  
//     });


// };

// const getApiBids = message => {

//     axios.get('http://localhost:3333/historicBidsPerGift/'+message)
//     .then(function (response) {
//         io.emit('bids', response.data);  
//     });


// };


// http.listen(3333);




 
