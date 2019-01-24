//Express geimporteerd
const express = require("express");
//Variable app is gelijk aan de functie express..
const app = express();
//Server is gelijk aan port 3000 die word gehost
const server = app.listen(9000);
//public map word gehost...
app.use(express.static("public"))
