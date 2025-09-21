const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconnection.js');
// const userRoutes = require('./routes/userRoutes');
// const foodRoutes = require('./routes/foodRoutes');
// const orderRoutes = require('./routes/orderRoutes');
dotenv.config();
const app = express(); 

app.use(express.json());

// let hello = ()=>{
//     console.log("Hello World");
// }

// app.get('/', (req, res) => {
//     res.send(hello);
// });
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(process.env.PORT || 5000, () => {
    // connectDB().then(()=>{
    //     console.log("Database connected successfully");
    // }).catch((err)=>{
    //     console.log("Database connection failed", err);
    // });
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});