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

const allowedOrigins = [
    "http://localhost:3000",
    "https://diabities-back.onrender.com",
  ];

  const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
      // Check if the incoming origin is in the allowedOrigins list
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };

app.use(cors(corsOptions));
// app.use(cors({ credentials:true, origin: "http://localhost:3000" }));
apis(app);



app.listen(process.env.PORT || 8080);