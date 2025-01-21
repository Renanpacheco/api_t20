const express = require('express');
const characterRoutes = require('./routes/sheetRoutes');

const port = 5000;

const app = express();

//config json response
app.use(express.json());

//routes
app.use("/rpg", characterRoutes);

app.listen(port); //front use port 5000