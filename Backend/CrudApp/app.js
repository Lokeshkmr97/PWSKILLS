require('dotenv').config();
const express=require('express');
const cors =require('cors');
const app=express();
const connectToDb=require('./config/db.js');


// Express Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

// Connection to DB

connectToDb();

// Router 
const userRoutes=require('./routes/userRoutes.js');

// app.get('/',userRoutes)
app.use('/',userRoutes)  


// export default app;
module.exports=app;