const express = require('express');
const connectDB = require('./models/connectdb'); 
const dotenv = require("dotenv").config()
const crudroutes = require('./routes/routes'); 

const app = express();


connectDB();


app.use(express.json());


app.use('/api', crudroutes);


app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});