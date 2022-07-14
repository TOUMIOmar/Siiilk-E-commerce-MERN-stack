const express = require('express');
const path = require('path');

const app = express();
require("dotenv").config();
app.use(express.json());
const cors = require('cors');
app.use(cors('http://localhost:5000'))







//Routes
app.use('/api/person',require('./routes/personRoutes'))
app.use('/api/product',require('./routes/productRoutes'))

//redering the front end
app.use(express.static(path.join(__dirname,'../','client','build')));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../','client','build','index.html'))
});



// connection to database
const connectDB = require("./config/connectDB");
const { patch } = require('./routes/personRoutes');
connectDB();
// server creation
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server Listening On Port ${PORT}`)
);