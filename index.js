const express = require('express');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, 'config.env')})
const app = express();
const databaseConnection = require('./db');
const {apis} = require('./apis.js');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseConnection();
app.use(cors({ credentials:true, origin: "http://localhost:3000" }));
apis(app);



app.listen(process.env.PORT || 8080);